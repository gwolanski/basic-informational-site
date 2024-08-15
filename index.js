// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');

//     let path = './';

//     switch (req.url) {
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         case '/contact-me':
//             path += 'contact-me.html';
//             break;
//         default:
//             path += '404.html';
//             break;
//     }

//     //send an html file
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     })

// }).listen(8080);


//below code creates the same output as above, but uses Express

const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, 'contact-me.html')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});