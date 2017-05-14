const fs = require('fs');

function onComplete(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString())
    }
}
fs.readFile('company.txt', onComplete);
fs.readFile('course.txt', onComplete);