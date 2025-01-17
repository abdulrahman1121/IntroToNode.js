const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if(err) throw err;
//     console.log("Folder created.");
// });

// Create amd write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Abdulrahman', (err) => {
//     if(err) throw err;
//     console.log("File written to.");

//     // Append to file
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love node.js', (err) => {
//         if(err) throw err;
//         console.log("File written to.");
//     });
// });

// Read a file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if(err) throw err;
    console.log("File renamed.");
});