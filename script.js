let comparar;
let amount;
let virada;
let vira1;
let vira2;
let puxar;
let cards;
let value;
let code;
let close = false;
const deck = [
    `img1.gif`,
    `img2.gif`,
    `img3.gif`,
    `img4.gif`,
    `img5.gif`,
    `img6.gif`,
    `img7.gif`,
];

// function quantidade() {
//     amount = Number(prompt(`Com quantas cartas você deseja jogar entre 4 e 14(escolha apenas valores pares)?`));
//     if(amount == 0) {
//         alert(`Insira um valor par e diferente de zero.`);
//         quantidade();
//     }
//     else if(amount < 4) {
//         alert(`Insira um valor maior ou igual a 4 e menor que 14 sendo o mesmo par.`);
//         quantidade();
//     }
//     else if(amount > 14) {
//         alert(`Insira um valor menor ou igual a 14 e sendo par.`);
//         quantidade();
//     }
//     else if (amount % 2 == 1) {
//         alert(`Insira um valor par e entre 4 e 14 para jogar.`);
//         quantidade();
//     }
//     else if (isNaN(amount) == true) {
//         alert(`Caractere invalido, insira um valor entre 4 e 14 e par.`)
//     }
//     return amount;
// }

// quantidade();

// deck.length = (amount) / 2;

value = document.getElementById(`valores`);
code = ``;
deck.forEach(index => {
    code += `
        <div class="imagesimages" data-estrutura="${index}" >
            <img class="frente-face" src="images/${index}">
            <img class="verso-face" src="images/parrotfather.png">
        </div>`
});
value.innerHTML = code + code;
cards = document.querySelectorAll(`.imagesimages`);

function verificacao() {
    comparar = vira1.dataset.estrutura === vira2.dataset.estrutura;
    if (vira1.dataset.estrutura === vira2.dataset.estrutura) {
        reset();
        return true;
    } else {
        timer();
        
    }
}
function virar() {
    if (close === true) {
        return false;
    }
    this.classList.add(`virar`);
    if (!vira1){
        vira1 = this;
        vira1.removeEventListener(`click`, virar);
        return false;
    }
    vira2 = this;
    
    verificacao();
}

function reset(comparar) {
    if(comparar === true) {
        vira1.removeEventListener(`click`, virar);
        vira2.removeEventListener(`click`, virar);
        close = false;
        vira1 = null;
        vira2 = null;
    }
}

cards.forEach(call => call.addEventListener(`click`,virar))

function timer() {
    close = true;
    setTimeout(timing,1000)
}

function timing() {
    vira1.classList.remove(`virar`);
    vira1.addEventListener(`click`,virar);
    vira2.classList.remove(`virar`);
    close = false;
    vira1 = null;
    vira2 = null;
}











