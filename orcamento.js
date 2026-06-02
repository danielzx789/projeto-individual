var express = require("express");
var router = express.Router();

var orcamentoController = require("../controllers/orcamentoController");

router.post("/cadastrar", function (req, res) {
    orcamentoController.cadastrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    orcamentoController.listarPorUsuario(req, res);
});

router.get("/resumo/:idUsuario", function (req, res) {
    orcamentoController.buscarResumo(req, res);
});

router.post("/remover/:idOrcamento/:idUsuario", function (req, res) {
    orcamentoController.remover(req, res);
});

module.exports = router;
