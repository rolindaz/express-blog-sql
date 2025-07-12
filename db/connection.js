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

// create console.log to verify that connection is up without errors
connection.connect(err => {
    if (err) {
        throw err;
    };
    console.info('Connection successful');
});

module.exports = connection;