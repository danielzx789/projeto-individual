var aulaModel = require("../models/aulaModel");

/*function listar(req, res) {
    aulaModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma aula encontrada!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as aulas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}*/

function listarConcluidas(req, res) {
    var idUsuario = req.params.idUsuario;

    aulaModel.listarConcluidas(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar aulas concluídas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

/*function buscarProgresso(req, res) {
    var idUsuario = req.params.idUsuario;

    aulaModel.buscarProgresso(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado[0]);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar progresso: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}*/

function concluir(req, res) {
    var idUsuario = req.body.idUsuario;
    var idAula = req.body.idAula;

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (idAula == undefined) {
        res.status(400).send("O id da aula está undefined!");
    } else {
        aulaModel.concluir(idUsuario, idAula)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao concluir aula: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function desconcluir(req, res) {
    var idUsuario = req.params.idUsuario;
    var idAula = req.params.idAula;

    aulaModel.desconcluir(idUsuario, idAula)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao desmarcar aula: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarConcluidas,
    concluir,
    desconcluir
};
