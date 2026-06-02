var database = require("../database/config");

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
