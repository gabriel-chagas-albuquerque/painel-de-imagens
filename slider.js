const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener('click',() => {
  if(imagemAtual === imagens.length-1){
    return;
  }
  
  esconderImagemAtual()
  imagemAtual++;
  mostrarProximaImagem()
  esconderOuMostrarSetas()
})

setaVoltar.addEventListener('click',() => {
  if(imagemAtual === 0){
    return;
  }
  
  esconderImagemAtual()
  imagemAtual--;
  mostrarProximaImagem()
  esconderOuMostrarSetas()
})

function esconderImagemAtual(){
  imagens[imagemAtual].classList.remove("mostrar");
}

function mostrarProximaImagem(){
  imagens[imagemAtual].classList.add("mostrar");
}

function esconderOuMostrarSetas(){
  if(imagemAtual === imagens.length-1){
    setaAvancar.classList.add("opacidade")
  }else{
    setaAvancar.classList.remove("opacidade")
  }
  
  if(imagemAtual === 0){
    setaVoltar.classList.add("opacidade")
  }else{
    setaVoltar.classList.remove("opacidade")
  }
}