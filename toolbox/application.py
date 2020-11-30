from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///spanish.db")


@app.route("/", methods=["GET"])
def index():

    return render_template("index.html")


@app.route("/favorites", methods=["GET", "POST"])
def favorites():

    if request.method == "GET":
        return render_template("favorites.html")

    else:

        # insert textarea into Favorites database
        favorite = request.form.get("your-text")

        db.execute("INSERT INTO favorites (favorite, user) VALUES (?, ?)", (favorite, session["user_id"]))

        # show Favorites in dropdown
        faves = db.execute("SELECT favorite FROM favorites WHERE user = :user", user=session["user_id"])

        return render_template("favorites.html", faves=faves)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # forget any user_id
    session.clear()

    # submitted form via post
    if request.method == "POST":

        # make sure username submitted
        if not request.form.get("username"):
            flash('You forgot your username!')
            return render_template("login.html")

        # make sure password submitted
        elif not request.form.get("password"):
            flash('You forgot your password!')
            return render_template("login.html")

        # query users table for username
        rows = db.execute("SELECT * FROM users WHERE username = :username",
                           username=request.form.get("username"))

        # ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["password"], request.form.get("password")):
            flash('Invalid username and/or password')
            return render_template("login.html")

        # remember which user has logged in
        session["user_id"] = rows[0]["id"]

        #favorites drop down+

        faves = db.execute("SELECT favorite FROM favorites WHERE user = :user", user=session["user_id"])

        # redirect to home page with favorites
        return render_template("favorites.html", faves=faves)

    else:
        return render_template("login.html")

@app.route("/logout")
def logout():
    """Log user out"""

    # forget any user_id
    session.clear()

    # redirect to home
    return redirect("/")

@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "GET":
        return render_template("register.html")
    else:
        username = request.form.get("username")

        rows = db.execute("SELECT * FROM users WHERE username = :username", username=username)

        if not username:
            flash('You must provide a username')
            return render_template("register.html")

        if len(rows) > 0:
            flash('Username not available')
            return render_template("register.html")

        #password and password confirmation check
        password = request.form.get("password")
        if not password:
            flash('You must provide a password')
            return render_template("register.html")

        confirmation = request.form.get("confirmation")
        if not confirmation:
            flash('You must confirm your password')
            return render_template("register.html")

        if confirmation != password:
            flash('Your passwords do not match!')
            return render_template("register.html")

        #hash passwords and insert new user into users table
        hash = generate_password_hash(request.form.get("password"))
        new_user = db.execute("INSERT INTO users (username, password) VALUES (:username, :hash)", username=request.form.get("username"), hash=hash)

        session["user_id"] = new_user

        # flash('Registered!')
        return render_template("favorites.html")