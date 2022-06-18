let amount;
let virada;
let vira1;
let vira2;
let puxar;
let cards;
let value;
let code;
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
    if (vira1.dataset.estrutura === vira2.dataset.estrutura) {
        return true;
    } else {
        return false;
    }
}


function virar() {
    this.classList.add(`virar`);
    if (vira1 === undefined){
        vira1 = this;
    }
    vira2 = this;
    
    verificacao();
}

cards.forEach(chamar => chamar.addEventListener(`click`,virar))















