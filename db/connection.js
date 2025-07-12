// Require the db connection
const mysql = require('mysql2');

// Establish the connection
const credentials = {
    host: 'localhost',
    user: 'root',
    password: 'vert1cal!',
    database: 'db_posts'
};

const connection = mysql.createConnection(credentials);