//This program creates waves that gives the appearance of the sea, with sea foam to separate the water from the sky. Everything is represented through text.
//While somewhat advanced, in this program I'll be using both the random and sine functions.
//(I deviated HEAVILY from the examples but I wanted to use my knowledge from Creative Code for this one)

class Wave {
    constructor(amp, period, phase) {
      this.amplitude = amp;
      this.period = period;
      this.phase = phase;
    }
    
    //Updates y value
    evaluate(x) {
      return sin(this.phase + TWO_PI * x / this.period) * this.amplitude;
    }
    
    //Updates phase aka makes it move
    update() {
      this.phase += 0.03;
    }
  }
  
  let waves = [];
  
  function setup() {
    createCanvas(600, 400);
    
    //Controls how many waves
    for (let i = 0; i < 4; i++) {
      waves[i] = new Wave(random(10, 40), random(200,500), random(TWO_PI));
    }
    
  }
  
  function draw() {
    background(0);
    
    
    for (let x = 0; x < width; x += 10) {
      let y = 0;
      
      for (let wave of waves) {
        y += wave.evaluate(x);
      }
      
      //Text setup
      noStroke();
      textSize(10);
      
      //Sea Foam
      fill(25, 255, 190);
      text('Foam', x, y + height/2);
      
      //Sky
      fill(165, 198, 250);
      for (let shiftDown = 0; shiftDown <= 180; shiftDown += 30) {
        text('Sky', x, y + shiftDown);
      }
      for (let shiftUp = 0; shiftUp <= 180; shiftUp += 30)  {
        text('Sky', x, y - shiftUp);
      }
      
      //Sea of Text
      fill(25, 150, 200);
      for (let shiftDown = 0; shiftDown <= 120; shiftDown += 30) {
        text('Water', x, y + height + shiftDown);
      }
      for (let shiftUp = 0; shiftUp <= 180; shiftUp += 30)  {
        text('Water', x, y + height - shiftUp);
      }
      
    }
    
    //updating phases
    for (let wave of waves) {
      wave.update();
    }
  }