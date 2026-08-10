const botoes = document.querySelectorAll("button");

botoes.forEach( function(botao){
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado(){
        let texto = botao.querySelector("span");
        if (curtiu === false){
               texto.textContent++;
               curtiu = true;
        } else{
            text.textContent--;
            curtiu = false;
        }
    }
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");