//pass is the module we would like to use this is a built in node module

const { basename } = require('path')
const path = require('path')

console.log(path.sep)

// you will get the noramalize path even if ou put extra slashes
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath
)

//if ionly wanted the file name i would use the basename
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)