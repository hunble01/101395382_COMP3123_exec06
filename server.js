const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/comp3123_assignment1"; 
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set mongoose to use global promise
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database MongoDB Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Import and register notes routes
const notesRoutes = require('../week06-mongodb-notes-app/routes/NoteRoutes');  // Make sure to have this file
app.use('/', notesRoutes);  // Use the routes for CRUD operations

// Default Route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Start the server on port 8081
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
