/*
Sets up all buttons required for the game
*/
//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let a3Button;
let a4Button;
let b1Button;
let b2Button;
let b3Button;
let b4Button;
let c1Button;
let c2Button;
let c3Button;
let c4Button;
let d1Button;
let d2Button;
let d3Button;
let d4Button;
let playAgain;
let screen = 0;
let font;
let music;

function preload() {
  font = loadFont('font.ttf');
  music = loadSound('song.mp3');
  cat = loadImage("cat.png");
  lover = loadImage("lover.png");
  dress = loadImage("dress.png");
  midnights = loadImage("midnights.png");
}

/* SETUP RUNS ONCE */
function setup() {
  music.loop();
  imageMode(CENTER);
  createCanvas(1500, 700);
  textAlign(CENTER);
  textSize(20);
  textFont(font);
  noStroke();

  // Set up the home screen
  background("pink");
  text(
    "Go to the Eras Tour!",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  fill(0);
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  a3Button = new Sprite(-200, -200);
  a4Button = new Sprite(-50, -50);
  b1Button = new Sprite(-200, -200);
  b2Button = new Sprite(-200, -200);
  b3Button = new Sprite(-200, -200);
  b4Button = new Sprite(-200, -200);
  c1Button = new Sprite(-200, -200);
  c2Button = new Sprite(-50, -50);
  c3Button = new Sprite(-200, -200);
  c4Button = new Sprite(-50, -50);
  d1Button = new Sprite(-200, -200);
  d2Button = new Sprite(-50, -50);
  d3Button = new Sprite(-200, -200);
  d4Button = new Sprite(-50, -50);
  playAgain = new Sprite(-50, -50);
}

/* DRAW LOOP REPEATS */
function draw() {
  buttonSetup();
  if(playAgain.mouse.pressed()){
    restart();
  }
  if (enterButton.mouse.presses()) {
    background(135, 206, 235);
    text("Who are you going with?", width / 2, height / 2 - 100);
    enterButton.pos = { x: -50, y: -50 };
    a1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    a2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    a3Button.pos = { x: width / 2 + 100, y: height / 2};
    a4Button.pos = { x: width / 2 - 100, y: height / 2};
  }
  //check a button
  if (a1Button.mouse.presses()) {
    background(128,128,128);
    text("Nice, you got lower bowl seats!\nPick an outfit!", width / 2, height / 2 - 200);
    a1Button.pos = { x: -50, y: -50 };
    a2Button.pos = { x: -50, y: -50 };
    a3Button.pos = { x: -50, y: -50 };
    a4Button.pos = { x: -50, y: -50 };

    b1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    b3Button.pos = { x: width / 2 + 100, y: height / 2 -50};
    b4Button.pos = { x: width / 2 - 100, y: height / 2 -50};
  }else if (a2Button.mouse.presses()) {
    background(128,128,128);
    text("You got obstructed view seats.\nPick an outfit!?", width / 2, height / 2 - 200);
    a1Button.pos = { x: -50, y: -50 };
    a2Button.pos = { x: -50, y: -50 };
    a3Button.pos = { x: -50, y: -50 };
    a4Button.pos = { x: -50, y: -50 };

    b1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    b3Button.pos = { x: width / 2 + 100, y: height / 2 -50};
    b4Button.pos = { x: width / 2 - 100, y: height / 2 -50};
  }else if (a3Button.mouse.presses()) {
    background(128,128,128);
    text("You're right next to the VIP tent! You met Selena Gomez and got a guitar pick from Scott Swift!\nPick an outfit!", width / 2, height / 2 - 200);
    a1Button.pos = { x: -50, y: -50 };
    a2Button.pos = { x: -50, y: -50 };
    a3Button.pos = { x: -50, y: -50 };
    a4Button.pos = { x: -50, y: -50 };

    b1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    b3Button.pos = { x: width / 2 + 100, y: height / 2 -50};
    b4Button.pos = { x: width / 2 - 100, y: height / 2 -50};
  }else if (a4Button.mouse.presses()) {
    background(128,128,128);
    text("Front row!!\nPick an outfit!", width / 2, height / 2 - 200);
    a1Button.pos = { x: -50, y: -50 };
    a2Button.pos = { x: -50, y: -50 };
    a3Button.pos = { x: -50, y: -50 };
    a4Button.pos = { x: -50, y: -50 };

    b1Button.pos = { x: width / 2 - b1Button.h, y: height / 2 + 100 };
    b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    b3Button.pos = { x: width / 2 + 100, y: height / 2 -50};
    b4Button.pos = { x: width / 2 - 100, y: height / 2 -50};
  }

  //check b buttons
  if (b1Button.mouse.presses()) {
    background(162,228,184);
    text("Taylor personally threw you out because your outfit was so bad!\nPlay again?", width / 2, height / 2);
    b1Button.pos = { x: -50, y: -200 };
    b2Button.pos = { x: -50, y: -200 };
    b3Button.pos = { x: -50, y: -200 };
    b4Button.pos = { x: -50, y: -200 };

    playAgain.pos = {x:width/2,y:height/2+100};

  }else if (b2Button.mouse.presses()) {
    background(162,228,184);
    text("Your openers are Shawn Mendes and Sabrina Carpenter!\nHow many friendship bracelets are you making?", width / 2, height / 2 - 200);
    b1Button.pos = { x: -50, y: -200 };
    b2Button.pos = { x: -50, y: -200 };
    b3Button.pos = { x: -50, y: -200 };
    b4Button.pos = { x: -50, y: -200 };

    c1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    c2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    c3Button.pos = { x: width / 2 + 100, y: height / 2 };
    c4Button.pos = { x: width / 2 - 100, y: height / 2 };
  }else if (b3Button.mouse.presses()) {
    background(162,228,184);
    text("Your dress couldn't fit in the stadium and the security guards kicked you out!\nPlay again?", width / 2, height / 2);
    b1Button.pos = { x: -50, y: -200 };
    b2Button.pos = { x: -50, y: -200 };
    b3Button.pos = { x: -50, y: -200 };
    b4Button.pos = { x: -50, y: -200 };

    playAgain.pos = {x:width/2,y:height/2+100};
  }else if (b4Button.mouse.presses()) {
    background(162,228,184);
    text("Your openers are Gracie Abrams and Lana Del Rey!\nHow many friendship bracelets are you making?", width / 2, height / 2 - 200);
    b1Button.pos = { x: -50, y: -200 };
    b2Button.pos = { x: -50, y: -200 };
    b3Button.pos = { x: -50, y: -200 };
    b4Button.pos = { x: -50, y: -200 };

    c1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
    c2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
    c3Button.pos = { x: width / 2 + 100, y: height / 2 };
    c4Button.pos = { x: width / 2 - 100, y: height / 2 };
  }
  if (c1Button.mouse.presses()) {
    background(135, 206, 235);
    text("Amazing! You made new friends and made a few trades!\nChoose the best Taylor's Version Vault Track!", width / 2, height / 2 - 200);
    c1Button.pos = { x: -50, y: -50 };
    c2Button.pos = { x: -50, y: -50 };
    c3Button.pos = { x: -50, y: -50 };
    c4Button.pos = { x: -50, y: -50 };

    d1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
    d2Button.pos = { x: width / 2 + 150, y: height / 2 + 100 };
    d3Button.pos = { x: width / 2 + 150, y: height / 2 };
    d4Button.pos = { x: width / 2 - 150, y: height / 2 };
  } else if (c2Button.mouse.presses()) {
    background(135, 206, 235);
    text("Oh no... you got sent to the nosebleeds for not having any friendship bracelets, and the stadium started shaking!\nyou leave the stadium.\nPlay again?", width / 2, height / 2);
    c1Button.pos = { x: -50, y: -50 };
    c2Button.pos = { x: -50, y: -50 };
    c3Button.pos = { x: -50, y: -50 };
    c4Button.pos = { x: -50, y: -50 };
    playAgain.pos = {x:width/2,y:height/2+100};

  } else if (c3Button.mouse.presses()) {
    background(135, 206, 235);
    text("Oh no! Security didn't let you in because you had too many friendship bracelets!\nPlay again?", width / 2, height / 2);
    c1Button.pos = { x: -50, y: -50 };
    c2Button.pos = { x: -50, y: -50 };
    c3Button.pos = { x: -50, y: -50 };
    c4Button.pos = { x: -50, y: -50 };
        playAgain.pos = {x:width/2,y:height/2+100};

  } else if (c4Button.mouse.presses()) {
    background(135, 206, 235);
    text("You made so many new friends and trades! You even swapped bracelets with Andrea Swift!\nChoose the best vault track.", width / 2, height / 2 - 200);
    c1Button.pos = { x: -50, y: -50 };
    c2Button.pos = { x: -50, y: -50 };
    c3Button.pos = { x: -50, y: -50 };
    c4Button.pos = { x: -50, y: -50 };

    d1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
    d2Button.pos = { x: width / 2 + 150, y: height / 2 + 100 };
    d3Button.pos = { x: width / 2 + 150, y: height / 2 };
    d4Button.pos = { x: width / 2 - 150, y: height / 2 };
  } 

  if (d1Button.mouse.presses()) {
    background(135, 206, 235);
    text("Your surprise songs are Dress and I Know Places!\nPlay Again?", width / 2, height / 2);
    d1Button.pos = { x: -50, y: -50 };
    d2Button.pos = { x: -50, y: -50 };
    d3Button.pos = { x: -50, y: -50 };
    d4Button.pos = { x: -50, y: -50 };
        playAgain.pos = {x:width/2,y:height/2+100};

  } else if (d2Button.mouse.presses()) {
    background(135, 206, 235);
    text("Your surprise songs are Cornelia Street and Hits Different!\nPlay again?", width / 2, height / 2);
    d1Button.pos = { x: -50, y: -50 };
    d2Button.pos = { x: -50, y: -50 };
    d3Button.pos = { x: -50, y: -50 };
    d4Button.pos = { x: -50, y: -50 };
            playAgain.pos = {x:width/2,y:height/2+100};

  }  else if (d3Button.mouse.presses()) {
    background(135, 206, 235);
    text("Your surprise songs are Treacherous and The Way I Loved You!\nPlay again?", width / 2, height / 2);
    d1Button.pos = { x: -50, y: -50 };
    d2Button.pos = { x: -50, y: -50 };
    d3Button.pos = { x: -50, y: -50 };
    d4Button.pos = { x: -50, y: -50 };
            playAgain.pos = {x:width/2,y:height/2+100};

  } else if (d4Button.mouse.presses()) {
    background(135, 206, 235);
    text("Your surprise songs are Back to December and London Boy!\nPlay again?", width / 2, height / 2);
    d1Button.pos = { x: -50, y: -50 };
    d2Button.pos = { x: -50, y: -50 };
    d3Button.pos = { x: -50, y: -50 };
    d4Button.pos = { x: -50, y: -50 };
            playAgain.pos = {x:width/2,y:height/2+100};

  }
  
}

/* FUNCTIONS TO DISPLAY SCREENS */
function buttonSetup() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.color = 'white';
  enterButton.text = "Start!";
  // Add A1 button
  a1Button.w = 100;
  a1Button.h = 50;
  a1Button.collider = 'k';
  a1Button.color = 'pink';
  a1Button.text = "friends";

  // Add A2 button
  a2Button.w = 100;
  a2Button.h = 50;
  a2Button.collider = 'k';
  a2Button.color = 'turquoise';
  a2Button.text = "sibling";

  //add a3 button
  a3Button.w = 100;
  a3Button.h = 50;
  a3Button.collider = 'k';
  a3Button.color = 'lavender';
  a3Button.text = "parents";

  //add a4 button
  a4Button.w = 100;
  a4Button.h = 50;
  a4Button.collider = 'k';
  a4Button.color = 'white';
  a4Button.text = "solo";

  // Add b1 button
  b1Button.w = 100;
  b1Button.h = 150;
  b1Button.collider = 'k';
  b1Button.color = 'pink';
  //b1Button.text = "reputation";
  cat.resize(0,b1Button.height);
  b1Button.img = cat;

  // Add b2 button
  b2Button.w = 100;
  b2Button.h = 150;
  b2Button.collider = 'k';
  b2Button.color = 'turquoise';
  //b2Button.text = "lover";
  lover.resize(0,b2Button.height);
  b2Button.img = lover;

  //add b3 button
  b3Button.w = 100;
  b3Button.h =150;
  b3Button.collider = 'k';
  b3Button.color = 'lavender';
  //b3Button.text = "folklore";
  dress.resize(0,b3Button.height);
  b3Button.img = dress;
  

  //add b4 button
  b4Button.w = 200;
  b4Button.h = 100;
  b4Button.collider = 'k';
  b4Button.color = 'white';
  //b4Button.text = "midnights";
  midnights.resize(b4Button.width,0);
  b4Button.img = midnights;

  //c1 button
  c1Button.w = 100;
  c1Button.h = 50;
  c1Button.collider = 'k';
  c1Button.color = 'pink';
  c1Button.text = "20";

  // Add c2 button
  c2Button.w = 100;
  c2Button.h = 50;
  c2Button.collider = 'k';
  c2Button.color = 'turquoise';
  c2Button.text = "0";

  //add c3 button
  c3Button.w = 100;
  c3Button.h = 50;
  c3Button.collider = 'k';
  c3Button.color = 'lavender';
  c3Button.text = "130";

  //add c4 button
  c4Button.w = 100;
  c4Button.h = 50;
  c4Button.collider = 'k';
  c4Button.color = 'white';
  c4Button.text = "45";

  //d1 button
  d1Button.w = 150;
  d1Button.h = 50;
  d1Button.collider = 'k';
  d1Button.color = 'pink';
  d1Button.text = "I Can See You";

  // Add d2 button
  d2Button.w = 150;
  d2Button.h = 50;
  d2Button.collider = 'k';
  d2Button.color = 'turquoise';
  d2Button.text = "Message in a Bottle";

  //add d3 button
  d3Button.w = 150;
  d3Button.h = 50;
  d3Button.collider = 'k';
  d3Button.color = 'lavender';
  d3Button.text = "Mr. Perfectly Fine";

  //add d4 button
  d4Button.w = 150;
  d4Button.h = 50;
  d4Button.collider = 'k';
  d4Button.color = 'white';
  d4Button.text = "Timeless";

  playAgain.w = 150;
  playAgain.h = 50;
  playAgain.collider = 'k';
  playAgain.color = "white";
  playAgain.text = "Play Again!";
}

function restart(){
enterButton.pos = {x:width / 2, y:height / 2 + 100};
  enterButton.text = "Restart!"
   a1Button.pos = { x: -50, y: -50 };
    a2Button.pos = { x: -50, y: -50 };
    a3Button.pos = { x: -50, y: -50 };
    a4Button.pos = { x: -50, y: -50 };
    b1Button.pos = { x: -200, y: -200 };
    b2Button.pos = { x: -50, y: -200 };
    b3Button.pos = { x: -50, y: -200 };
    b4Button.pos = { x: -50, y: -200 };
    c1Button.pos = { x: -50, y: -50 };
    c2Button.pos = { x: -50, y: -50 };
    c3Button.pos = { x: -50, y: -50 };
    c4Button.pos = { x: -50, y: -50 };
  d1Button.pos = { x: -50, y: -50 };
    d2Button.pos = { x: -50, y: -50 };
    d3Button.pos = { x: -50, y: -50 };
    d4Button.pos = { x: -50, y: -50 };
  playAgain.pos = {x:-50, y:-50};
}
