const fs = require('fs');

//callbacks
// const result = fs.readFile('./data1.txt', (err, data)=>{
//     if(err) throw err;
//     console.log(data + " ");
// })

//promises
const promise = new Promise((resolve, reject)=>{
    fs.readFile('./data.txt', (err, data)=>{
        if (err) 
            reject(err);
        resolve(data);
    })
})

fs.readFile('./data.txt').

promise.then(data=> console.log(data+" "))


console.log("Finishing...")