// arquivo responsavel pelo controle de sessão do front-end.
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO; 
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario"); 

    //aqu verifica se existe email e nome estão logados.
//por que se os dois existirem, signiffica que o usuário provavelmente fez login.


    if (email != null && nome != null) {
        if (b_usuario != null) {
            b_usuario.innerHTML = nome;
        }
    } else {
        window.location = "login.html";
    }
}
//serve para fazer logout
function limparSessao() { // apagaa os dados temporários salvos na sessão do navegador
    sessionStorage.clear(); 
    window.location = "login.html";
}

// loading
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");

    if (divAguardar != null) {
        divAguardar.style.display = "flex"; // mostra o loading na tela.
    }
}
// serve para parar o carregamento.
function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");

    if (divAguardar != null) {
        divAguardar.style.display = "none"; // Esconde o loading.
    }

    var divErrosLogin = document.getElementById("div_erros_login");

        // se foi enviada uma mensagem de erro e a div existe, mostra o erro na tela.
    if (texto && divErrosLogin != null) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
