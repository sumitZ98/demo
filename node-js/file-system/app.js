var fs = require('fs')

fs.readFile('calc.js','utf8', function(err , data){
    console.log(data)
})
fs.writeFile('calc1.js','console.log("done")',function(err){        /* console.log(done) is being written at the file calc1.js */
    console.log("data saved")
})

fs.appendFile('calc.js','/n exports.sub = function(a,b){ return a-b}', function(err){
    console.log("data saved")
})

fs.unlink("calc1.js",function(err){
    console.log("deleted")
})
