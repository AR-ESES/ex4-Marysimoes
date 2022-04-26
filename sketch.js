let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
   translate(-40,-30)
      scale(0.10);
      noStroke();
   
      fill (139,69,19)
    square(40, 40, 120, 50, 50, 50, 5); // cabelo

   fill (245,222,179)
    circle(100, 100, 100); // cabeca
    
  
    fill(0,250,154);
    circle(70, 95, 20); // olho esquerdo
    
    fill	(0,0,0);
    circle(70, 95, 10);  
    
  fill(0,250,154);
    circle(110, 95, 20); // olho direito
   
  fill	(0,0,0);
    circle(110, 95, 10);  
  
    fill(222,184,135);
    circle(90, 105, 10); // nariz
    
    fill	(240,128,128);
    ellipse(95, 125, 70, 10); // boca
    
    fill(245,222,179);
    rect(10, 175, 70, 10); // braco esquedo
    
    fill(245,222,179);
    rect(120, 175, 70, 10); // braco direto
    
    fill(245,222,179);
    rect(70, 210, 10, 100); // perna esquerda
    
    fill(245,222,179);
    rect(120, 210, 10, 100); // perna direita
    
   fill(188,143,143);
    circle(72, 310, 25); // pe direito
  
      fill(188,143,143);
    circle(120, 310, 25); // pe esquerdo
  
  fill	(139,0,139);
    square(55, 150, 90, 20); // corpo
     
      
      pop();
    }
  }
}
