// 1 Acessar a Janela (Browser)
// 2 Pegar o HTML todo
// 3 Pegar botão
// 4 Saber que está sendo clicado no botão

// 5 acessar a janela
// 6 pegar o html todo
// 7 pegar o elements
// 8 Mover o elements para direita


const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function (){
    pixels = pixels + 20;
    elements.style = `transform: translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function(){
    pixels = pixels - 20;
    elements.style = `transform: translateX(${pixels}px)`
})