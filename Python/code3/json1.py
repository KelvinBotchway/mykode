import json
# Since this is a curly bracket, it is a dictionary.
# If it was a square brace, it would be a list
data = '''
{
  "name" : "Chuck",
  "phone" : {
    "type" : "intl",
    "number" : "+1 734 303 4456"
   },
   "email" : {
     "hide" : "yes"
   }
}'''

info = json.loads(data) # this line parses the dictionary
print('Name:', info["name"])
print('Hide:', info["email"]["hide"])
