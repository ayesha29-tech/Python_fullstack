from flask import Flask,render_template, 

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

@app.route('/register')
def register():
    if requst.method == "POST":
        name=request.form["name"]
        email=request.form["email"]
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        course=request.form["course"]
        name=request.form["name"]

if __name__=='__main__':
    app.run(debug= True)