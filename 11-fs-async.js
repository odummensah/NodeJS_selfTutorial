// file system module (async version)
const {readFile, writeFile} = require('fs');

console.log('start')

readFile('./Content/subfolder/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

     const first = result;
     readFile('./Content/subfolder/second.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }   

     const second = result
     writeFile('./Content/subfolder/result-async.txt',
      `Here is the result : ${first}, ${second}`
        , (err, result) =>{
            if(err){
                console.log(err);
                return;
        }
        console.log('done with this task');
     })
    })
    
})
console.log('starting the next one');
