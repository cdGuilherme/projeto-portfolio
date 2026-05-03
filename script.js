"use strict";

// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
function mudarTema() {
    // Dark mode para a página
    document.body.classList.toggle("dark-mode");

    // Dark mode para a navbar
    document
        .querySelectorAll(".header-nav__itens")
        .forEach(el => el.classList.toggle("header-nav__itens-dark"));

    // Dark mode para a imagem da lua
    document.querySelector(".mudar-tema__img").classList.toggle("mudar-tema__img-dark");

    // Dark mode para a tabela projetos
    document.querySelector(".tabela-projetos").classList.toggle("tabela-projetos-dark");
}