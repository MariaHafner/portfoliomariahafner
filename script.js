//Decidi que faria um sistema de enviar e-mail que de fato funciona. Ao pesquisar, achei sobre "mailto", que abre o programa de email ao clicar enviar.

const formulario = document.getElementById("form_contato");
formulario.addEventListener("submit", function(event) {
    //Impede o envio padrão do formulário
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    //Aqui ele verifica se tem algum campo vázio, se sim, ele dispara um alerta.
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
        alert("Erro! Preencha todos os campos antes de enviar.");
        return;
    }

    //Monta o corpo da mensagem do e-mail
    const corpo =
    `Nome: ${nome}
    E-mail: ${email}

${mensagem}`;

    // Abre o aplicativo de e-mail do usuário com os campos preenchidos
    window.location.href =
    `mailto:contatomariahafner@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

});

//BARRA MENU NO MOBILE

if (window.matchMedia("(max-width: 768px)").matches) {
    const openMenu = document.getElementById('open_menu');
    const menu = document.getElementById('menu_mobile');
    const closeMenu = document.getElementById('close_menu');
    const menuFlutuante = document.getElementById('navbar_mobile');
    const header = document.querySelector(".header img");

    openMenu.addEventListener('click', ()=>{
        menu.classList.add('active');
        menuFlutuante.classList.add('hidden');
        header.style.marginTop = "0";
    })

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('active');
        menuFlutuante.classList.remove('hidden');
        header.style.marginTop = "50px";
    })
}