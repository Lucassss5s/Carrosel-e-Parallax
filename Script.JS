const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;



function slider() {
  contador++;
  
  if ( contador > imagens.length -1) 
    contador = 0;
  

  box.style.transform = `translateX(${-contador * 1100 }px)`;


 
}

setInterval(slider , 2000);


const botao = document.getElementById("btn")

botao .addEventListener ("click", () => {

  window.location.href = "http://127.0.0.1:3000/index2.html";

});






