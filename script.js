

let amount;
let deck = [];
let count = 0;
let virada;
let vira1;
let vira2;
let puxar;

function quantidade() {
    amount = Number(prompt(`Com quantas cartas você deseja jogar entre 4 e 14(escolha apenas valores pares)?`));
    while (amount % 2 === 1) {
        amount = Number(prompt(`Digite apenas valores pares:`));}
    while (isNaN(amount) === true) {
        amount = Number(prompt(`Caracter invalido, digite um valor par.`));
    }
    while (amount % 2 === 1) {
        amount = Number(prompt(`Digite apenas valores pares:`));}
    while (isNaN(amount) === true) {
        amount = Number(prompt(`Caracter invalido, digite um valor par.`));
    }

    return amount;
}

quantidade();


function numeroCartas() {
    while (count < amount) {
        puxar = document.querySelector(`.sumir`)
        puxar.classList.remove(`sumir`)
        count ++;    
    }
}
numeroCartas();

function virar (elemento) {
    vira1 = document.querySelector(`.primeiropar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar2 (elemento) {
    vira2 = document.querySelector(`.primeiropar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar3 (elemento) {
    vira1 = document.querySelector(`.segundopar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar4 (elemento) {
    vira2 = document.querySelector(`.segundopar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar5 (elemento) {
    vira1 = document.querySelector(`.terceiropar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar6 (elemento) {
    vira2 = document.querySelector(`.terceiropar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar7 (elemento) {
    vira1 = document.querySelector(`.quartopar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar8 (elemento) {
    vira2 = document.querySelector(`.quartopar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar9 (elemento) {
    vira1 = document.querySelector(`.quintopar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar10 (elemento) {
    vira2 = document.querySelector(`.quintopar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar11 (elemento) {
    vira1 = document.querySelector(`.sextoopar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar12 (elemento) {
    vira2 = document.querySelector(`.sextopar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
function virar13 (elemento) {
    vira1 = document.querySelector(`.setimopar .face.um`);
    if (vira1 != null) {
        vira1.classList.add(`verso`);
    }else if (vira1 == null) {
        virada = elemento.classList.add(`frente`);
    }

}
function virar14 (elemento) {
    vira2 = document.querySelector(`.setimopar .face.dois`);
    if (vira2 != null) {
        vira2.classList.add(`verso`);
    }else if (vira2 == null) {
        virada2 = elemento.classList.add(`frente`);
    }

}
// CRIA UMA LISTA COM ISSO:
