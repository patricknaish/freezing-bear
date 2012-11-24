import requests
import json

data = []
queue = []
with open('constituencies.txt') as f:
    for line in f:
        queue.append(line)

while len(queue) > 0:
    failed = []
    for line in queue:
        result = requests.get(
          'http://maps.googleapis.com/maps/api/geocode/json?',
          params={'address': line, 'sensor': 'true'}
        )
        r = result.json['results']
        if len(r) == 0:
            failed.append(line)
            print(result.text)
            continue
        obj = {
            "name": line,
            "lat": result.json['results'][0]['geometry']['location']['lat'],
            "lon": result.json['results'][0]['geometry']['location']['lng']
        }
        data.append(obj)
    print('Failed: ' + str(len(failed)))
    queue = failed

print(json.dumps(data))
print('Total geocodes performed: ' + str(len(data)))
