app.yaml

runtime: python27
api_version: 1
threadsafe: false
handlers: 
  - url: /
    script: main.py



index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello world</h1>
    <h2>This is from google sdk</h2>
</body>
</html>

main.py
import codecs

file=codecs.open('index.html',"r","utf-8")
print(file.read())