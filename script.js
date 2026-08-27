/* =========================
   TEMA CLARO
========================= */

function temaClaro() {

    document.body.classList.remove("escuro");
    document.body.classList.remove("contraste");

}


/* =========================
   TEMA ESCURO
========================= */

function temaEscuro() {

    document.body.classList.remove("contraste");
    document.body.classList.add("escuro");

}


/* =========================
   ALTO CONTRASTE
========================= */

function altoContraste() {

    document.body.classList.remove("escuro");
    document.body.classList.add("contraste");

}


/* =========================
   TAMANHO DAS LETRAS
========================= */

let tamanhoFonte = 20;

function aumentarFonte() {

    if (tamanhoFonte < 30) {

        tamanhoFonte += 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}


function diminuirFonte() {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}


function tamanhoNormal() {

    tamanhoFonte = 20;

    document.body.style.fontSize = "20px";

}


/* =========================
   LEITURA EM VOZ ALTA
========================= */

function falarTexto() {

    pararFala();

    const texto = document.querySelector("main").innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    fala.pitch = 1;

    window.speechSynthesis.speak(fala);

}


/* =========================
   PARAR LEITURA
========================= */

function pararFala() {

    window.speechSynthesis.cancel();

}


/* =========================
   LER UMA DICA
========================= */

function lerCard(botao) {

    pararFala();

    const card = botao.parentElement;

    const titulo = card.querySelector("h3").innerText;

    const texto = card.querySelector("p").innerText;

    const conteudo = titulo + ". " + texto;

    const fala = new SpeechSynthesisUtterance(conteudo);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    window.speechSynthesis.speak(fala);

}


/* =========================
   LER ALERTA
========================= */

function falarAlerta() {

    pararFala();

    const alerta = document.querySelector(".alerta");

    const texto = alerta.querySelector("p").innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    window.speechSynthesis.speak(fala);

}