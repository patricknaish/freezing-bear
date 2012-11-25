#!/usr/bin/python3

import xml.etree.ElementTree as et
import sqlite3

with open('mp-id.txt') as mpidfile:
    mpdict = dict()
    passing = True
    for line in mpidfile:
        if passing:
            try:
                l = line.split()[0]
            except IndexError:
                continue

            if line.split()[0] != 'mpid':
                continue
            else:
                passing = False
                continue
        else:
            sp = line.split()
            try:
                mpdict[sp[0]] = ' '.join([sp[1], sp[2]])
            except IndexError:
                continue

tree = et.parse('mp-attendance.xml')
mps = tree.getroot()
    
data_mps = dict()

for mp in mps:
    if mp.attrib['public_whip_data_date'] == "complete":
        continue
    id = mp.attrib['id'].split('/')[2]
    try:
        name = mpdict[id]
    except KeyError:
        continue
    attendance = mp.attrib['public_whip_division_attendance']
    attendance = attendance.strip("%")
    attendance = float(attendance)
    attendance = attendance / 100

    rebellion = mp.attrib['public_whip_rebellions']
    if rebellion == 'n/a':
        rebellion = float(0)
    else:
        rebellion = rebellion.strip("%")
        rebellion = float(rebellion)
        rebellion = rebellion / 100

    data_mps[name] = [attendance, rebellion]


with sqlite3.connect('data.db') as conn:
    c = conn.cursor()
    #c.execute('''alter table mps add column attendance float''')
    #c.execute('''alter table mps add column rebellion float''')
    
    for mpname in data_mps:
        attendance, rebellion = data_mps[mpname]
     
        c.execute('''update or rollback mps set attendance = ?, rebellion = ? where firstname = ? and lastname = ?''',
                  (attendance,
                   rebellion,
                   mpname.split()[0],
                   mpname.split()[1]))

    conn.commit()
