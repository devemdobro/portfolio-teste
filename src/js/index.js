const btnMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btnMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}

function esconderBotao(){
    btnMostrarProjetos.classList.add("remover");
}