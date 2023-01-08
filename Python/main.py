# Regular Expressions Assignment
# import re
#
# hand = open("kelvin.txt")
# x = list()
# for line in hand:
#     y = re.findall('[0-9]+', line)
#     x = x + y
#
# sum = 0
# for z in x:
#     sum = sum + int(z)
#
# print(sum)




# How to connect to a socket
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')

mysock.close()