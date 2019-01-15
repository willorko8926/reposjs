
var express = require('express');

var exphbs = require('express-handlebars');


const knex = require('./db/knex');

var app = express();

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//ROUTING

app.get('/', function(req, res){  
   
    res.render('home');
});

app.get('/user', function(req, res){      
    knex('usuarios')//tabla name
    .select()
    .then (usuarios => {//variable
        res.render('usuarios', {objUsers:usuarios}); //variable
    })
     
});


app.get('/about', function(req, res) {
    /*res.type('text/plain');
    res.send('Acerca de mi página'); */  
    res.render('about');
});

//routing archivos estáticos y vistas
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function(){
 console.log('express on localhost:' +app.get('port'));  
});