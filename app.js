//var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso
// Carrega as variáveis do arquivo .env ou .env.dev para dentro do process.env.

require("dotenv").config({ path: caminho_env });

// importa as bibliotecas principais do backend.
var express = require("express");
var cors = require("cors");
var path = require("path");
// pega do .env a porta e o host onde o servidor vai rodar.
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

// importa os arquivos de rotas do projeto.

//var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
//var avisosRouter = require("./src/routes/avisos");
//var medidasRouter = require("./src/routes/medidas");
//var aquariosRouter = require("./src/routes/aquarios");
//var empresasRouter = require("./src/routes/empresas");
var aulaRouter = require("./src/routes/aula");
var orcamentoRouter = require("./src/routes/orcamento");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// conecta os caminhos principais do sistema aos arquivos de rotas.

//app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
//app.use("/avisos", avisosRouter);
//app.use("/medidas", medidasRouter);
//app.use("/aquarios", aquariosRouter);
//app.use("/empresas", empresasRouter);
app.use("/aula", aulaRouter);
app.use("/orcamentos", orcamentoRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
