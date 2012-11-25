#!/usr/bin/python3

import csv
import sqlite3

with open('expenses.csv', encoding='latin-1') as f:
    dialect = csv.Sniffer().sniff(f.read(4096))
    f.seek(0)
    dr = csv.DictReader(f, dialect=dialect)
    mpdict = dict()
    for line in dr:
        name = line[" MP's Name"]
        amount = line[" Amount Paid"]
        
        try:
            mpdict[name] = mpdict[name] + int(float(amount))
        except KeyError:
            mpdict[name] = int(float(amount))

with sqlite3.connect('data.db') as conn:
    c = conn.cursor()
    c.execute('''alter table mps add column expense int''')
    for mp in mpdict:
        c.execute('''update or rollback mps set expense = ? where firstname = ? and lastname = ?''', (mpdict[mp], mp.split()[0], mp.split()[1]))
    conn.commit()
