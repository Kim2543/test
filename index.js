let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// homepage

app.get('/', (req, res) => {
    return res.send({ error: false,
    message: 'Welcome to RESTful CRUD API with NodeJS, Express, MYSQL',
    written_by: 'Patarasak'
    })
})

// connection to mysql database
let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'nodejs_api'
})
dbCon.connect();

app.get('/books', (req, res) => {
    dbCon.query('SELECT * FROM books', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "User table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/contact', (req, res) => {
    dbCon.query('SELECT * FROM contact_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Contact table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/edu', (req, res) => {
    dbCon.query('SELECT * FROM edu_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Education table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/exp', (req, res) => {
    dbCon.query('SELECT * FROM exp_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Experience table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/guild', (req, res) => {
    dbCon.query('SELECT * FROM guild_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Guild table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/interest', (req, res) => {
    dbCon.query('SELECT * FROM interest_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Interest table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.get('/skill', (req, res) => {
    dbCon.query('SELECT * FROM skill_info', (error, result, fields) => {
        if (error) throw error;

        let message = ""
        if (result === undefined || result.length == 0) {
            message = "Skill table is emty";
        } else {
            message = "Successfully";
        }
        return res.send({error: false, data: result, message: message});
    })
})

app.listen(3000, () =>{
    console.log("Node is running on port 3000");
})

module.exports = app;