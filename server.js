// import express app
const express = require('express');
const app = express();

// setup port
const PORT = process.env.PORT;

// import routers
const postRouter = require('./routers/posts');

// import middlewares
const errorsHandlerMiddleware = require('./middlewares/errorsHandler');
const notFoundMiddleware = require('./middlewares/notFound');

// Set server listener

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Register body parser for app json
app.use(express.json());

// Set homepage route
app.get('/', (req, res)=>{
    console.log('Welcome to the blog!');
    res.send('Welcome to the blog!');
});

// Point the prefixes for the routes with the use method
app.use('/api/posts', postRouter);

// Set the middleware to handle problems
app.use(errorsHandlerMiddleware);
app.use(notFoundMiddleware);