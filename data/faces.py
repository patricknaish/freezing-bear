#!/usr/bin/python3

import bs4
import requests
import urllib

def getAllMPUrls():
    result = requests.get("http://www.parliament.uk/mps-lords-and-offices/mps/")

    if result.status_code != 200:
        raise(Exception("Error, code: %s" % str(result)))

    mpsHome = bs4.BeautifulSoup(result.text)
    mpslistTable = mpsHome.find_all('table')[1].tbody

    for row in mpslistTable.find_all('tr'):
        try:
            if row.td['scope'] == 'row':
                uri = "http://www.parliament.uk" + row.a['href']
                yield uri
        except KeyError:
            pass

def getPhotoURIOfMPFromURI(uri):
    result = requests.get(uri)

    if result.status_code != 200:
        raise(Exception("Error, code: %s" % str(result)))

    mpPage = bs4.BeautifulSoup(result.text)
    for img in mpPage.find_all('img'):
        try:
            if img['id'] == "ctl00_ctl00_SiteSpecificPlaceholder_PageContent_ctlrBiography_imgPersonImage":
                return (img['src'], img['alt'])
        except KeyError:
            pass

def downloadPhoto(uri, name):
    req = urllib.request.urlopen(uri)
    with open("_".join(name.split(' ')) + ".jpg", "wb") as f:
        f.write(req.read())
        
    

mpuris = getAllMPUrls()
for mpuri in mpuris:
    mpphotouri, mpname = getPhotoURIOfMPFromURI(mpuri)
    print(mpphotouri + " : " + mpname)

    
