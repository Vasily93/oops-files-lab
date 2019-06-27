const fs = require('fs');

function copy(src, dest, callback) {
    fs.readFile(src, {encoding: 'utf8' }, (err, content) => {
        if(err) return callback(err);

        fs.writeFile(dest,content, err => {
            callback(err);
        });
    });
}

module.exports = copy;