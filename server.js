/*
  File name: server.js
  Student Name: Son Vu
  Student ID: 301366093
  Date: 29 Sep
*/
const express = require('express');
const app = express();
const path = require('path');

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// About Me Route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// Projects Route
app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

// Services Route
app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

// Contact Route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});


// Start the server
const PORT = process.env.PORT || 3107;  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
