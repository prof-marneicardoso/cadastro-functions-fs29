
// Carrega o formulário
const formCadastro = document.getElementById("formCadastro");

// Cria o Ouvinte de Evento (Listener)
formCadastro.addEventListener("submit", (event) => {
    // Previne o comportamento padrão (envio, submit)
    event.preventDefault();

    // Guarda os valores informados pelo usuário
    const nome = formCadastro.nome;
    const email = formCadastro.email;
    const senha = formCadastro.senha;

    // Se o campo Nome não for preenchido, encerra
    if (!verificarCampo(nome, "Nome")) {
        console.log("Cai fora");
        return; // Early return (retorno antecipado)
    }

    // Se o campo E-mail não for preenchido, encerra
    if (!verificarCampo(email, "E_mail")) {
        console.log("Cai fora");
        return; // Early return (retorno antecipado)
    }

    // Se o campo Senha não for preenchido, encerra
    if (!verificarCampo(senha, "Senha")) {
        console.log("Cai fora");
        return; // Early return (retorno antecipado)
    }

    console.log("Continua");
});

function verificarCampo(campo, nomeCampo) {
    // Se o campo informado estiver em branco
    if (campo.value == "") {
        // Mostra a mensagem
        alert(`Preencha o campo ${nomeCampo}`);

        // Coloca o foco no campo
        campo.focus();
        
        // Não passa no teste
        return false;
    }

    return true;
}
