var express = require("express");
var router = express.Router();

var aulaController = require("../controllers/aulaController");

router.get("/listar", function (req, res) {
    aulaController.listar(req, res);
});

router.get("/concluidas/:idUsuario", function (req, res) {
    aulaController.listarConcluidas(req, res);
});

router.get("/progresso/:idUsuario", function (req, res) {
    aulaController.buscarProgresso(req, res);
});

router.post("/concluir", function (req, res) {
    aulaController.concluir(req, res);
});

router.post("/desconcluir/:idUsuario/:idAula", function (req, res) {
    aulaController.desconcluir(req, res);
});

module.exports = router;