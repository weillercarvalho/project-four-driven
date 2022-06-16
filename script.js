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
//     while (amount % 2 === 1) {
//         amount = Number(prompt(`Digite apenas valores pares:`));}
//     while (isNaN(amount) === true) {
//         amount = Number(prompt(`Caracter invalido, digite um valor par.`));
//     }
//     while (amount % 2 === 1) {
//         amount = Number(prompt(`Digite apenas valores pares:`));}
//     while (isNaN(amount) === true) {
//         amount = Number(prompt(`Caracter invalido, digite um valor par.`));
//     }

//     return amount;
// }
// quantidade();

// deck.length = amount;

value = document.getElementById(`valores`);
code = ``;
deck.forEach(index =>{
    code += `
        <div class="imagesimages">
            <img class="frente-face" src="images/${index}">
            <img class="verso-face" src="images/parrotfather.png">
        </div>`
});
value.innerHTML = code + code;
cards = document.querySelectorAll(`.imagesimages`);

function virar() {
    this.classList.add(`virar`);
}

cards.forEach(chamar => chamar.addEventListener(`click`,virar))





















