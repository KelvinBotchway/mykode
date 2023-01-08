import urllib.request

fhand = urllib.request.urlopen('https://www.py4e.com/code3/urllink2.py?PHPSESSID=ee0c16d597716e1a616eed0587a718c6')
for line in fhand:
    print(line.decode().strip())
