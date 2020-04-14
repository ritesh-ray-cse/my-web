from bottle import route, run, template ,url , static_file
import os
import requests

@route("/res/<filepath:path>",name="res")   # this is static function with name res
def listres(filepath):
    return static_file(filepath , root="res")   # root = name of static folder

@route("/colorgame/")
def ColorGame():
    return template("colorgame.tpl",links = url) # this is url


@route("/todo/")
def ToDo():
    return template("todo.tpl",links = url)


@route("/")
def Homepage():
    return template("home.tpl" , links = url)



# the format of url is
#  links ('name of static function' ,filepath='filepath of file')


if __name__ == "__main__":
    if os.getenv("COMPUTERNAME")=='RITESH-LAPPY':
        run(debug=True)
    else:
        port=os.environ.get("PORT",5000)
        port=int(port)
        run(host="0.0.0.0",port=port,debug=False)
    