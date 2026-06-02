var database = require("../database/config");

function cadastrar(idUsuario, tipoServico, valorEstimado) {
    var instrucaoSql = `
        INSERT INTO orcamentos (usuario_id, tipo_servico, valor_estimado)
        VALUES (${idUsuario}, '${tipoServico}', ${valorEstimado});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            id,
            tipo_servico,
            valor_estimado,
            data_calculo
        FROM orcamentos
        WHERE usuario_id = ${idUsuario}
        ORDER BY data_calculo DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResumo(idUsuario) {
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS totalOrcamentos,
            IFNULL(SUM(valor_estimado), 0) AS somaValores,
            IFNULL(AVG(valor_estimado), 0) AS mediaValores,
            IFNULL(MAX(valor_estimado), 0) AS maiorValor
        FROM orcamentos
        WHERE usuario_id = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function remover(idOrcamento, idUsuario) {
    var instrucaoSql = `
        DELETE FROM orcamentos
        WHERE id = ${idOrcamento}
        AND usuario_id = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listarPorUsuario,
    buscarResumo,
    remover
};
