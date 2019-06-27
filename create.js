const fs = require('fs');

const animals = [
    'cat',
    'dog',
    'dragon',
    'unocorn'
];

const randomIndex = arr => {
    return Math.floor(Math.random() * arr.length);
};

function create(n, callback) {
    let created = 0;
    for (let i = 0; i < array.length; i++) {
        const animal = animals[randomIndex(animals)];
        fs.writeFile('./fixtures/${i}.txt', animal,err => {
            created += 1;
            if(created === n) {
                callback();
            }
            return callback(err);
        });
    }
}

module.exports = create;
