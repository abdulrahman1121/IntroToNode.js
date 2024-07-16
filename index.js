const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html'});
//             res.end(content);
//         }
//     )}

//     if(req.url === '/api/users') {
//         const users = [
//             { name: 'Ahmed Elmi', age: 19 },
//             { name: 'Abdulrahman', age: 21}
//         ]

//         res.writeHead(200, { 'Content-Type': 'application/json'});
//         res.end(JSON.stringify(users))
//     }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/'? 
    'index.html' : req.url);

    // Extension of file
    let extName = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and content type
    switch(extName) {
        case '.js':
            contentType = 'text/JavaScript';
            break;
        case '.css':
            contentType = 'text/CSS';
            break;
        case '.json':
            contentType = 'application/JSON';
            break;
        case '.png':
            contentType = 'image/PNG';
            break;
        case '.jpg':
            contentType = 'image/JPG';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', 'NotFound.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
