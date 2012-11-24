#!/usr/bin/python3

import xml.etree.ElementTree as et
import sqlite3

tree = et.parse('all-members.xml')
parliament = tree.getroot()


with sqlite3.connect('data.db') as conn:
    c = conn.cursor()
    c.execute('''drop table if exists mps''')
    c.execute('''create table mps (title text, firstname text, lastname text, constituency text)''')
    for member in parliament:
        c.execute('''insert into mps values (?, ?, ?, ?)''', 
                  (member.attrib['constituency'],
                   member.attrib['title'],
                   member.attrib['firstname'],
                   member.attrib['lastname']))
    conn.commit()

        
