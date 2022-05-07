var counter = 0;

function darkMode() {
    counter++;
    var icon = null;
    var bodyToDark = document.body;
    var h1ToDark = document.getElementById('name');
    var paragraph = document.querySelector('.estudante-p');
    var header = document.querySelector('header');
    var backImg = document.querySelector('.img');
    var linksInter = document.querySelector('.link-interesses');
    var strong = document.querySelector('.strOng');
    var strong2 = document.querySelector('.strOng2');
    var italic = document.querySelector('em');
    var italic2 = document.querySelector('.em');
    var hability = document.querySelector('.minhas-habilidades');
    var habilityOutras = document.querySelector('.outras-habilidades');

    h1ToDark.classList.toggle("dark-mode");
    bodyToDark.classList.toggle("dark-mode-body");
    paragraph.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode-primary");
    backImg.classList.toggle("dark-mode-img");
    linksInter.classList.toggle("dark-mode-link");
    strong.classList.toggle("dark-mode-strong");
    strong2.classList.toggle("dark-mode-strong");
    italic.classList.toggle("dark-mode-em");
    italic2.classList.toggle("dark-mode-em");
    hability.classList.toggle("dark-mode-habilidades");
    habilityOutras.classList.toggle("dark-mode-outras");

    if (counter % 2 == 1) {
        icon = document.getElementById('darkModeImg').src = "/assets/white-mode.png";
    } else {
        icon = document.getElementById('darkModeImg').src = "/assets/dark-mode.png";
    }
}