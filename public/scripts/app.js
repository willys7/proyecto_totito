var turno=1;

var canvas=document.getElementById("totito");
var bt=document.getElementsByClassName("btn");
var win=document.getElementsByClassName("ganador");
var cuadrados= document.getElementsByClassName("cuadrado");
var tab=["","","","","","","","",""];
var xo="";
var cl;

function render(element){
  
  if (cuadrados[element].innerHTML=== "") {
      if (turno===3) {
        return 1;
      }
      if (turno===1) {
        xo="O";
        turno=2;
      }else if (turno===2) {
        xo="X";
        turno=1;
      }
      
    cuadrados[element].innerHTML=xo;
    tab[element]=xo;
    verificar();
  }
  
}


function verificar(){

//2da columna
  if (tab[1] !== "") {
    if (tab[4]===tab[1]) {
      if (tab[7]===tab[1]) {
        ganador(1,4,7);
        return true;
      }
    }

  }
//diagonal derecha a izquierda 
  if (tab[2] !== "") {
    if (tab[4]===tab[2]) {
      if (tab[6]===tab[2]) {
        ganador(2,4,6);
        return true;
      }
    }

    //col - 3
    if (tab[5]===tab[2]) {
      if (tab[8]===tab[2]) {
        ganador(2,5,8);
        return true;
      }
    }
    
  }

  //fila - 2
  if (tab[3] !== "") {
    if (tab[4]===tab[3]) {
      if (tab[5]===tab[3]) {
        ganador(3,4,5);
        return true;
      }
    }
  }

  if (tab[0] !== "") {
    //fila - 1
    if (tab[1]===tab[0]) {
      if (tab[2]===tab[0]) {
        ganador(0,1,2);
        return true;
      }
    }
    //Diagonal izquierda a derecha
    if (tab[4]===tab[0]) {
      if (tab[8]===tab[0]) {
        ganador(0,4,8);
        return true;
      }
    }

    //col - 1
    if (tab[3]===tab[0]) {
      if (tab[6]===tab[0]) {
        ganador(0,3,6);
        return true;
      }
    }

  }

//fila - 3
  if (tab[6] !== "") {
    if (tab[7]===tab[6]) {
      if (tab[8]===tab[6]) {
        ganador(6,7,8);
        return true;
      }
    }
  }
//empate
  for (var i = cuadrados.length - 1; i >= 0; i--) {
    if (tab[i]==="") {
      break;
    }
  }
  if (i === -1) {
    win.innerHTML=("Hay un empate");
    turno=3;
    bt.style.visibility="visible";
    win.style.visibility="visible";
  }
}

function ganador(e1,e2,e3){
  cuadrados[e1].style.color="orange";
  cuadrados[e2].style.color="orange";
  cuadrados[e3].style.color="orange";
  
  win.innerHTML=("Felicidades jugador de las "+xo+" gano!");
  turno=3;
  win.style.visibility="visible";
  bt.addEventListener("click",init());
}

function init(){
  turno=1;
  var html="<div class='cuadrado s1'></div>";
  html+="<div class='cuadrado s2'></div>";
  html+="<div class='cuadrado s3'></div>";
  html+="<div class='cuadrado s4'></div>";
  html+="<div class='cuadrado s5'></div>";
  html+="<div class='cuadrado s6'></div>";
  html+="<div class='cuadrado s7'></div>";
  html+="<div class='cuadrado s8'></div>";
  html+="<div class='cuadrado s9'></div>";
  html+="<div id='ganador'></div>";
  html+="<button class='btn'>Jugar otra vez</button>";
  

  canvas.innerHTML=html;

  cuadrados= document.getElementsByClassName("cuadrado");
  bt=document.getElementsByClassName("btn");
  win=document.getElementsByClassName("ganador");

  cuadrados[0].addEventListener("click",function(){ render(0);} );
  cuadrados[1].addEventListener("click",function(){ render(1);} );
  cuadrados[2].addEventListener("click",function(){ render(2);} );
  cuadrados[3].addEventListener("click",function(){ render(3);} );
  cuadrados[4].addEventListener("click",function(){ render(4);} );
  cuadrados[5].addEventListener("click",function(){ render(5);} );
  cuadrados[6].addEventListener("click",function(){ render(6);} );
  cuadrados[7].addEventListener("click",function(){ render(7);} );
  cuadrados[8].addEventListener("click",function(){ render(8);} );
  bt[0].addEventListener("click",init());


  for (var i = cuadrados.length - 1; i >= 0; i--) {
    tab[i]="";
    cuadrados[i].innerHTML="";
    cuadrados[i].removeAttribute("style");
  }
  
  bt.style.visibility="hidden";
  win.style.visibility="hidden";
}
init();var turno=1;

