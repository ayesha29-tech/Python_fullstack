from flask import Flask,render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_teplate("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/courses")
def courses():
    return render_template("courses.html")

@app.route("/trainers")
def tainers():
    return render_template("trainers.html")

if __name__=='__main__':
    app.run(debug= True)