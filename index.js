const { check } = require('./lib/checker')

if(process.argv.length < 3){
    console.error(`Missing arguments: expression`)
    process.exit(1)
}

let lisp_code = process.argv[2];

console.log(check(lisp_code))
