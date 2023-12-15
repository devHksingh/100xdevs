/*
File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

*/

// const { error } = require('console')

// const fileClean = new Promise((resolve,reject)=>{
//     const fs = require('fs')
//     fs.readFile('./fileCleaner.text','utf-8',(err,data)=>{
//         if(err){
//             reject(err)
//         }
//         resolve(data)
//     })
// })
//     .then((d)=>{
//         // console.log(d);
//         let textArr = d.split(' ')
//         // console.log(textArr);
//         // console.log(typeof(d));
//         // console.log(typeof(textArr));
//         let cleanData =[]
//         textArr.map((item)=>{
//             if(item){
//                 cleanData.push(item)
//             }
//         })
//         console.log(cleanData.join(' '));
//         return cleanData.join(' ')


//     })
//     .then((str)=>{
//         str = str.trim()
//         const fs = require('fs')
//         fs.writeFile('./fileCleaner.text',str,(err,data)=>{
//             if(err){
//                 console.error(err)
//                 return
//             }
//             console.log(`${data} data is updated to`);

//         })
//     })

const fs = require('fs')


function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./fileCleaner.text','utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            console.log(data);
            resolve(data)
        })
    })
}

function writeFile(str){
    return new Promise((resolve,reject)=>{
        fs.writeFile('./fileCleaner.text',str,(err)=>{
            if(err){
                reject(err)
            }
            resolve(`File is updated`)
        })
    })
}

function appendFile(str){
    return new Promise((resolve,reject)=>{
        fs.appendFile('./fileCleaner.text',str,(err)=>{
            if(err){
                reject(err)
            }
            resolve(`File is succesfully appended`)
        })
    })
}

readFile()
    .then((data)=>{
        let testDataArr = data.split(' ')
        console.log((testDataArr));
        const words = []
        testDataArr.map((item)=>{
            if(item){
                words.push(item)
            }
        })
        return words.join(' ')
    })
    .then((data)=>{
        let msg = writeFile(data)
        return msg
    })
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{console.log(err);})

