var alugados = [];

function alterarStatus(id){
  let gameClicado = document.getElementById(`game-${id}`);
  var imagem = gameClicado.querySelector(`.dashboard__item__img`);
  let botao = gameClicado.querySelector(`.dashboard__item__button`);
  let nomeJogo = gameClicado.querySelector(`.dashboard__item__name`);
  
    if (botao.classList.contains('dashboard__item__button--return')) {

       imagem.classList.remove('dashboard__item__img--rented');

       botao.classList.remove('dashboard__item__button--return');

       botao.classList.add('dashboard__item__button');

       botao.textContent = 'Alugar';

    }
    else {  

        imagem.classList.add('dashboard__item__img--rented');

        botao.classList.add('dashboard__item__button'); 

        botao.classList.add('dashboard__item__button--return');
     
        botao.textContent = 'Devolver';
    }



}
