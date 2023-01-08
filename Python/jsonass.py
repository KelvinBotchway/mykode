import urllib.request
import json

url = input("Enter the URL:")

info = json.loads(urllib.request.urlopen(url).read())

x = 0
counts = 0
for items in info['comments']:

	x = x + int(items['count'])
counts = counts + 1
print('Counts ',(counts))
print('Sum : ',(x))

