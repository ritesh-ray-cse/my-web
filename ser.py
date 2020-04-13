from bottle import route, run, template
import os
import requests

@route('/hello/<name>')
def index(name):
    return template('<b>Hello {{name}}</b>!', name=name)


@route("/")
def homepage():
    return "welcome to homepage <a href='/hello/world' > click me</a>" 



    
if __name__ == "__main__":
    port=os.environ.get("PORT",5000)
    port=int(port)
    run(host="0.0.0.0",port=port,debug=False)