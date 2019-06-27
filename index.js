const fs = require('fs');
const animals = ['dog', 'cat', 'horse', 'human', 'fish'];

const getAnimal = () => {
   const index = Math.floor(Math.random() * animals.length);
   return animals[index];
};

const createFiles = (directory, count, callback) => {
    let written = 0;
    for (let i = 0; i < array.length; i++) {
        fs.writeFiles('${directory}'/'${i}', (err)  => {
            console.log(err)
            
        })
        
    }
}

// fs.writeFile('randomFileName', 'random-word', err => {
//     if (err) return callback(err);
//     console.log('file created')
// })