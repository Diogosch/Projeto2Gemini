// ==========================================
// TAMANHO DA FONTE
// ==========================================

let tamanhoFonte = 20;

const tamanhoMinimo = 14;
const tamanhoMaximo = 32;
const tamanhoPadrao = 20;


// Atualiza o tamanho da fonte
function atualizarFonte() {

    document.documentElement.style.setProperty(
        "--tamanho-fonte",
        tamanhoFonte + "px"
    );

}


// ==========================================
// AUMENTAR LETRAS
// ==========================================

function aumentarFonte() {

    if (tamanhoFonte < tamanhoMaximo) {

        tamanhoFonte += 2;

        atualizarFonte();

    }

}


// ==========================================
// DIMINUIR LETRAS
// ==========================================

function diminuirFonte() {

    if (tamanhoFonte > tamanhoMinimo) {

        tamanhoFonte -= 2;

        atualizarFonte();

    }

}


// ==========================================
// TAMANHO NORMAL
// ==========================================

function tamanhoNormal() {

    tamanhoFonte = tamanhoPadrao;

    atualizarFonte();

}


// ==========================================
// TEMA CLARO
// ==========================================

function temaClaro() {

    document.body.classList.remove("escuro");
    document.body.classList.remove("contraste");

}


// ==========================================
// TEMA ESCURO
// ==========================================

function temaEscuro() {

    document.body.classList.remove("contraste");
    document.body.classList.add("escuro");

}


// ==========================================
// ALTO CONTRASTE
// ==========================================

function altoContraste() {

    document.body.classList.remove("escuro");
    document.body.classList.add("contraste");

}


// ==========================================
// LEITURA EM VOZ ALTA
// ==========================================

function falarTexto() {

    pararFala();

    const texto = document.querySelector("main").innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ==========================================
// PARAR LEITURA
// ==========================================

function pararFala() {

    window.speechSynthesis.cancel();

}


// ==========================================
// LER UMA DICA
// ==========================================

function lerCard(botao) {

    pararFala();

    const card = botao.parentElement;

    const titulo = card.querySelector("h3").innerText;

    const texto = card.querySelector("p").innerText;

    const conteudo = titulo + ". " + texto;

    const fala = new SpeechSynthesisUtterance(conteudo);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ==========================================
// LER ALERTA
// ==========================================

function falarAlerta() {

    pararFala();

    const alerta = document.querySelector(".alerta");

    const texto = alerta.querySelector("p").innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ==========================================
// INICIAR COM TAMANHO PADRÃO
// ==========================================

atualizarFonte();