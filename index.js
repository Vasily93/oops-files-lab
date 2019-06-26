const fs = require('fs');
// const word = ['cup', 'pillow', 'couch', 'table', 'coffee'];



fs.writeFile((Math.random() * 100), 'random-word', err => {
    if (err) return callback(err);
    console.log('file created')
})