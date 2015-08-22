var express = require('express'); // n~ao por pasta

var app = express();

app.use(express.static('public'));//pasta de arquivos estaticos


//app.get('/', function(req, res){
//   res.send('<h1> hello word </h1>')
//});

app.get('/service/cep/:number',function(req, res){
    console.log(req.params.number);

    res.json({
        bairro: "Bela Vista",
        logradouro: "Avenida Paulista",
        cep: req.params.number,
        uf: "SP",
        localidade: "São Paulo"
    });
});

app.get('/service', function(req, res){

    res.json({data:'Some data'})

});

app.listen(8080);
console.log('running...');