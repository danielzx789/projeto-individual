var orcamentoModel = require("../models/orcamentoModel");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var tipoServico = req.body.tipoServico;
    var valorEstimado = req.body.valorEstimado;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (tipoServico == undefined) {
        res.status(400).send("O tipo do serviço está undefined!");
    } else if (valorEstimado == undefined) {
        res.status(400).send("O valor estimado está undefined!");
    } else {
        orcamentoModel.cadastrar(idUsuario, tipoServico, valorEstimado)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao cadastrar orçamento: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    orcamentoModel.listarPorUsuario(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao listar orçamentos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarResumo(req, res) {
    var idUsuario = req.params.idUsuario;

    orcamentoModel.buscarResumo(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar resumo de orçamentos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function remover(req, res) {
    var idOrcamento = req.params.idOrcamento;
    var idUsuario = req.params.idUsuario;

    if (idOrcamento == undefined) {
        res.status(400).send("O id do orçamento está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        orcamentoModel.remover(idOrcamento, idUsuario)
            .then(function (resultado) {
                res.status(200).send("Item removido com sucesso!");
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao remover orçamento: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
module.exports = {
    cadastrar,
    listarPorUsuario,
    buscarResumo,
    remover
};
