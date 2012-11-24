#!/usr/bin/python3

import json
import csv
import sqlite3
import requests

def tryInt(s):
    try:
        return int(s)
    except:
        return 0
def tryFloat(s):
    try:
        return float(s)
    except:
        return 0.0

def extractIncapacityBenefits():
    with open('Incapacity benefit claimants.csv') as incap:
        csv_reader = csv.reader(incap)
        next(csv_reader)
        rows = [[line[0], line[7], line[8]] for line in csv_reader]
    return rows

def extractOutOfWorkBenefits():
    with open('Out of work benefit claimants.csv') as oow:
        csv_reader = csv.reader(oow)
        next(csv_reader)
        rows = [[line[0], line[7], line[8]] for line in csv_reader]
    return rows

def extractPopulations():
    with open('Population.csv') as oow:
        csv_reader = csv.reader(oow)
        next(csv_reader)
        rows = [[line[0], line[1], line[7]] for line in csv_reader]
    return rows

def extractUnemployment():
    with open('Unemployment.csv') as oow:
        csv_reader = csv.reader(oow)
        next(csv_reader)
        rows = [[line[0], line[7], line[8]] for line in csv_reader]
    return rows

def extractWages():
    with open('Wages.csv') as oow:
        csv_reader = csv.reader(oow)
        next(csv_reader)
        rows = [[line[0], line[7]] for line in csv_reader]
    return rows

def extractAll():
    wag = extractWages()
    une = extractUnemployment()
    pop = extractPopulations()
    oow = extractOutOfWorkBenefits()
    inc = extractIncapacityBenefits()

    cidict = {line[0]:dict() for line in (wag + une + pop + oow + inc)}
    for line in wag:
        cidict[line[0]]['medianwage'] = tryInt(line[1])
    for line in une:
        cidict[line[0]]['unemployment_level'] = tryInt(line[1])
        cidict[line[0]]['unemployment_rate'] = tryFloat(line[2])
    for line in pop:
        cidict[line[0]]['name'] = line[1]
        cidict[line[0]]['population'] = tryInt(line[2])
    for line in oow:
        cidict[line[0]]['outofwork_level'] = tryInt(line[1])
        cidict[line[0]]['outofwork_rate'] = tryFloat(line[2])
    for line in inc:
        cidict[line[0]]['incap_level'] = tryInt(line[1])
        cidict[line[0]]['incap_rate'] = tryFloat(line[2])

    for key in cidict:
        name = cidict[key]['name']
        if name == "Ynys Môn":
            name == "Ynys Mon"
        payload = {'constituency':name, 'output':'json', 'key':'B8RJFyDQSYcdAQyaoeBEP39b'}
        r = requests.get('http://www.theyworkforyou.com/api/getMP', params=payload)
        if r.status_code == 200 and r.json is not None:
            try:
                cidict[key]['mpid'] = r.json['member_id']
                cidict[key]['mpname'] = r.json['full_name']
            except KeyError:
                print(name)
                cidict[key]['mpid'] = 0
                cidict[key]['mpname'] = "None"
    return cidict

def insertDatabase(data, location):
    with sqlite3.connect(location) as conn:
        c = conn.cursor()
        c.execute('''drop table if exists constituencies''')
        c.execute('''create table constituencies (id text, name text, population integer, outofwork_level integer, outofwork_rate real, incap_level integer, incap_rate real)''')

        for pk in data:
            values = data[pk]            
            c.execute('''insert into constituencies values (?, ?, ?, ?, ?, ?, ?)''', 
                      (pk,
                      values['name'],
                      values['population'],
                      values['outofwork_level'],
                      values['outofwork_rate'],
                      values['incap_level'],
                      values['incap_rate']))
        conn.commit()
        
if __name__ == '__main__':
    cidict = extractAll()
    insertDatabase(cidict, 'data.db')
