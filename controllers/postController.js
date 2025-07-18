// import posts list
const connection = require('../db/connection');

// import middleware functions
const errorsHandlerMiddleware = require('../middlewares/errorsHandler');
const notFoundMiddleware = require('../middlewares/notFound');

// Create INDEX route function

const index = (req, res) => {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results)=>{
        if (err) {
            errorsHandlerMiddleware();
        };
        console.log(results);
        res.json(results);
    });
};

// Create SHOW route function

const show = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.id);
    const id = parseInt(req.params.id);
    console.log(`Here's the pizza number ${id}`);
    const sql = 'SELECT * FROM posts WHERE id = ?;';
    console.log(sql);
    connection.query(sql, [id], (err, results)=>{
        if(err) {
            errorsHandlerMiddleware();
        };
        if (!results.length > 0) {
        return res.status(404).json({
            error: true,
            message: 'Not Found'
            });
        };
        console.log(results);
        return res.json(results[0]);
    });
};

// Create STORE route function

const store = (req, res)=>{
    console.log('This is the req body: ', req.body);
    const {title, content, image} = req.body;
    const sql = 'INSERT INTO posts (title, content, image) VALUES (?, ?, ?);';
    connection.query(sql, [title, content, image], (err, results)=>{
        if (err) {
            errorsHandlerMiddleware();
        };
        console.log(results);
        res.status(201).json({
            id: results.insertId
        });
    });
};

// Create UPDATE route function

const update = (req, res)=>{
    const id = parseInt(req.params.id);
    console.log('This is the req body: ', req.body);
    const {title, content, image} = req.body;
    const sql = 'UPDATE posts SET title = ?, content = ?, image = ? WHERE id = ?;';
    console.log(sql);
    connection.query(sql, [title, content, image, id], (err, results)=>{
        if (err) {
            errorsHandlerMiddleware();
        };
        console.log(results);
        if (results.affectedRows === 0) {
            notFoundMiddleware();
        };
        const sqlSinglePost = 'SELECT * FROM posts WHERE id = ?;';
        console.log(sqlSinglePost);
        connection.query(sqlSinglePost, [id], (err, results)=>{
            if (err) {
                errorsHandlerMiddleware();
            };
            if (!results.length > 0) {
                notFoundMiddleware();
            };
            console.log(results);
            return res.json(results[0]);
        });
    });
};

// Create DESTROY route function

const destroy = (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const sql = 'DELETE FROM posts WHERE id = ?;';
    console.log(sql);
    connection.query(sql, [id], (err, results)=>{
        if (err) return res.status(500).json({ error: true, message: err.message });
        console.log(results);
        if (results.affectedRows === 0) {
            return res.status(404).json({
                error: true,
                message: 'Not Found'
            });
        };
        res.sendStatus(204);
    });
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};