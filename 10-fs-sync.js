//this the sync approach


//FS BUILT IN MODULE FOR INTERACTING WITH FILE SYSTEM. 2 TYPES= ASYNC ,SYNC (BLOCKING AND NON BLOCKING)
//example ay to use 
const { readFileSync,writeFileSync } = require('fs')
//reads the content of file
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//console.log(first,second)
//takes to arguments 1:path and file to write and 2:value to put in file
//if file is not there it will create it and if it is there it will over write the file with the values
 writeFileSync('./content/result-sync.txt',`here is the result:${first},${second}`)
//console.log(first,second)
console.log('done with this task')
console.log('starting the next one')


