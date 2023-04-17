let colidiu = false;

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolinha
let velxBolinha = 6;
let velyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 15;
let raqueteAltura = 100;


//raquete oponente
let xRaqueteoponente = 575;
let yRaqueteoponente = 150;
let velRaqueteOponente;


// placar
let pontosMeus = 0;
let pontosOponente = 0;



//define dimensões da tela
function setup() {
  createCanvas(600, 400);
}

//tudo dentro dessa função aparecerá no desenho
function draw() {
  background(0);
  //mostrabolinha
  mostraBolinha();
  
  //movimenta a bolinha
  movimentaBolinha();
  
  //se está colidindo, vá para o outro lado
  verificaColisao();
  
  //Criando Raquete
  mostrarRaquete(xRaquete,yRaquete);
  
  //mostrar raquete oponente
  mostrarRaquete(xRaqueteoponente,yRaqueteoponente)
  
  //Movimentar Raquete
  movimentaMinhaRaquete();
  
  //movimenta a raquete do oponente
  movimentaRaqueteOponente();
  
  //Colidir com a Raquete
  
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  
  //placar 
  incluirPlacar();
  
  //marcar os pontos
  marcarPontos();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

 function movimentaBolinha(){
      xBolinha += velxBolinha;
      yBolinha += velyBolinha;
  }

  function verificaColisao(){
      if(xBolinha + raio > width || xBolinha-raio < 0){
      velxBolinha *= -1;
      }
      if(yBolinha+ raio > height || yBolinha-raio < 0){
      velyBolinha *= -1;
      }
  }
    
  function mostrarRaquete(x,y){
    rect(x,y,raqueteComprimento,raqueteAltura);
  }

  function movimentaMinhaRaquete(){
    
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
    
  }
function  movimentaRaqueteOponente(){
  
      velRaqueteOponente = velyBolinha;
      yRaqueteoponente += velRaqueteOponente;
    }

  function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComprimento
       && yBolinha - raio < yRaquete + raqueteAltura
       && yBolinha + raio > yRaquete){
      
      velxBolinha *= -1;
    }
    
  }
    
    function colisaoMinhaRaqueteBiblioteca(){
  colidiu =
    collideRectCircle(xRaquete, yRaquete, xRaqueteoponente, yRaqueteoponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    }
  
  if(colidiu){
    velxBolinha *= -1;
  }
  function incluirPlacar(){
        fill(255);
        text(pontosMeus,278,26);
        text(pontosOponentes,300,26);
      }
      
  function marcarPontos(){
        if(xBolinha < 10){
          pontosMeus += 1;
        }
      
}