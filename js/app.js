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
        return; // Early return (retorno antecipado)
    }

    // Se o campo E-mail não for preenchido, encerra
    if (!verificarCampo(email, "E-mail")) {
        return;
    }

    // Se o campo Senha não for preenchido, encerra
    if (!verificarCampo(senha, "Senha")) {
        return;
    }

    // Se tudo estiver OK, mostra mensagem de sucesso
    mostrarMensagem("Cadastro realizado com sucesso!", "success");

    // Limpa os campos do form
    formCadastro.reset();
});

function verificarCampo(campo, nomeCampo) {
    // Se o campo informado estiver em branco
    if (campo.value == "") {
        // Mostra a mensagem
        mostrarMensagem(`Preencha o campo ${nomeCampo}`, "error");

        // Coloca o foco no campo
        campo.focus();

        // Não passa no teste
        return false;
    }

    // Se for o campo Nome
    if (nomeCampo === "Nome") {
        // Não pode tre menos de 3 caracteres
        if (campo.value.length < 3) {
            mostrarMensagem("Nome precisa ter 3 caracteres ou mais", "error");
            return false;
        }
    }

    return true;
}

function mostrarMensagem(mensagem, tipo = "success") {
    const toastContainer = document.querySelector("#toastContainer");

    // Cria o element do toast
    const toast = document.createElement("div");
    toast.className = `toast ${tipo}`;

    // Define o ícone baseado no tipo
    const icone = tipo === "success" ? "✔️" : "❌";

    // Estrutura do toast
    toast.innerHTML = `
        <div class="toast-icon">${icone}</div>
        <div class="toast-message">${mensagem}</div>
        <button class="toast-close">×</button>
    `;

    // Adiciona o toast ao container
    toastContainer.appendChild(toast);

    // Botão de fechar
    const btnClose = toast.querySelector(".toast-close");
    btnClose.addEventListener("click", () => {
        removerToast(toast);
    });

    // Remove automaticamente após 3 segundos
    setTimeout(() => {
        removerToast(toast);
    }, 3000);
}

function removerToast(toast) {
    toast.classList.add("hide");

    // Remove do DOM após a animação
    setTimeout(() => {
        toast.remove();
    // }, 300);
    }, 3000);
}
