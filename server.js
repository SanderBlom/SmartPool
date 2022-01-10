
var express = require('express'); //Web server
var session = require('express-session') //Used to keep track of sessions
var flash = require('express-flash')//Used for flash messages
var app = express();
const PORT = 3000 //Ports that the server will listen to.
// Changing the view engine to ejs
app.set('view engine', 'ejs');

//Gives express access to views foler 
app.use(express.static('views'));
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

app.use(flash()) //Used for flash messages

//function to get the homepage 
app.get("/", function (req, res){
    var APIstatus = false
    //Names of current players
    var player1Name = "Sander" 
    var player2Name = "Amanuel"
    //Current scores
    var player1Score = 2
    var player2Score = 4

    res.render('index', {message: req.flash('message'), title: 'index', constatus: APIstatus,
    player1Name, player2Name, player1Score, player2Score}) //Renderes the index websites and passes different variables and objects to use in frontend
})

//function to get the register page
app.get("/register", function (req, res){

    res.render('register', {message: req.flash('message'), title: 'register'}) //Renders the register websites and passes different variables for flash message and title for navbar
})
//function to get the login page
app.get("/login", function (req, res){

    res.render('login', {message: req.flash('message'), title: 'login'}) //Renders the register websites and passes different variables for flash message and title for navbar
})
//-------------------------------------Start server-------------------------------------//
//starts server on port 3000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}. Time & Date = ` + new Date().toString());
});
//-------------------------------------End server-------------------------------------//