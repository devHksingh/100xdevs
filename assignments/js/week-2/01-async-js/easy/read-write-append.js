/*
1.Write code to read contents of a file and print it to the console. 
2.Using the fs library again, try to write to the contents of a file.

*/
const test = new Promise((resolve,reject)=>{
    const fs = require('fs')
    fs.readFile('./testText.txt','utf-8',(err,data)=>{
        if(err){
            reject(err)
        }
        resolve(data)
    })
}).then((data)=>{
    console.log(data);
    const myPromise2 = new Promise((resolve,reject)=>{
        const fs = require('fs')
        fs.writeFile('./testText.txt','Hello',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve("Data is updated")
        })
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.error(err);
    })

}).catch((err)=>{
    console.error(err)
})

// anotherWay by fs.promises

// const fsPromises = require('fs').promises;

// fsPromises.readFile('./testText.txt','utf-8')
//     .then((data)=>{
//         console.log('Read',data);
//         return fsPromises.writeFile('./testText.txt','Hello')
//     })
//     .then(()=>{
//         console.log(`writting done`);
//     })
//     .catch((err)=>{
//         console.error(err)
//     })