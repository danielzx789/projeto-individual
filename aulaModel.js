var database = require("../database/config");

/*function listar() {
    var instrucaoSql = `
        SELECT id, titulo, video_url, ordem
        FROM aulas
        ORDER BY ordem;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}*/

function listarConcluidas(idUsuario) {
    var instrucaoSql = `
        SELECT 
            a.id,
            a.titulo,
            a.video_url,
            a.ordem,
            ac.data_conclusao
        FROM aulas_concluidas ac
        INNER JOIN aulas a
            ON ac.aula_id = a.id
        WHERE ac.usuario_id = ${idUsuario}
        ORDER BY a.ordem;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/*function buscarProgresso(idUsuario) {
    var instrucaoSql = `
        SELECT
            (SELECT COUNT(*) FROM aulas) AS totalAulas,
            (SELECT COUNT(*) FROM aulas_concluidas WHERE usuario_id = ${idUsuario}) AS aulasConcluidas,
            ROUND(
                ((SELECT COUNT(*) FROM aulas_concluidas WHERE usuario_id = ${idUsuario}) /
                (SELECT COUNT(*) FROM aulas)) * 100
            ) AS porcentagem;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}*/

function concluir(idUsuario, idAula) {
    var instrucaoSql = `
        INSERT INTO aulas_concluidas (usuario_id, aula_id)
        VALUES (${idUsuario}, ${idAula});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function desconcluir(idUsuario, idAula) {
    var instrucaoSql = `
        DELETE FROM aulas_concluidas
        WHERE usuario_id = ${idUsuario}
        AND aula_id = ${idAula};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarConcluidas,
    concluir,
    desconcluir
};
