let botao = document.querySelector("#botao");
botao.style.background=" rgb(8, 7, 54)";

botao.addEventListener("mouseover",e =>{
    botao.style.background="red"
});

botao.addEventListener("mouseout",e =>{
    botao.style.background="rgb(8, 7, 54)"
});

function mensagem(){
    let text = document.getElementById("mensagem");
    text.style.display = "block";
}