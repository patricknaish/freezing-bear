#!/usr/bin/python3

import xml.etree.ElementTree as et
import sqlite3

tree = et.parse('all-members.xml')
parliament = tree.getroot()


with sqlite3.connect('data.db') as conn:
    c = conn.cursor()
    c.execute('''drop table if exists mps''')
    c.execute('''create table mps (title text, firstname text, lastname text, constituency text)''')
    constituencies_seen = []
    for member in parliament:
        if member.attrib['constituency'] not in constituencies_seen:
            c.execute('''replace into mps values (?, ?, ?, ?)''', 
                      (
                    member.attrib['title'],
                    member.attrib['firstname'],
                    member.attrib['lastname'],
                    member.attrib['constituency']))
            constituencies_seen.append(member.attrib['constituency'])
    conn.commit()

        
