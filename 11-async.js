//this the async approach using the callback nonblocking


//FS BUILT IN MODULE FOR INTERACTING WITH FILE SYSTEM. 2 TYPES= ASYNC ,SYNC (BLOCKING AND NON BLOCKING)
//example ay to use 
const { readFile,writeFile} = require('fs')
//need to provide  a callback as a second function that will run on call back or button click
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  }
  //this is where you would set up functionality
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return;
    }
    const second= result
    writeFile('./content/reult-async.txt', `here is the result: ${first},${second}`, (err, result) => {
       if (err) {
    console.log(err)
    return;
      }  
      console.log('done with this task')
    })
  })
})
console.log('starting next task')