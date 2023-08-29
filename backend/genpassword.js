const bcrypt = require('bcrypt')

let pwsrd = bcrypt.hashSync('1234', 9)
console.log("🚀 ~ file: genpassword.js:4 ~ pwsrd:", pwsrd)
