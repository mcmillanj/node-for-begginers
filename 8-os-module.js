// CommonJS , every file is module by default
// modules = Encapsulated Code (only share minimum) we decide what we want to share

//os modules built in object and methods
const os = require('os')
// Example info about current user

const user = os.userInfo()

console.log(user)

//method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem:os.freemem(),
}
   console.log(currentOS)