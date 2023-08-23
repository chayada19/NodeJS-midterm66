let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to chayada')
})

app.get('/hello/:name', function (req,res) {
    console.log('hello - ' + req.params.name)
    res.send('sey hello with ' + req.params.name) 
   })

   app.get('/que1', function (req,res) {
    res.send('sey hello with ' + req.params.name) 
   })

   app.get('/que2 ', function isPrime(x) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); 
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
    res.send('sey hello with ' + x) 
   })

   

   

let port = 8081

app.listen(port, function(){
    console.log('server running on ' + port)
})