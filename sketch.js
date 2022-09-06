// "use strict";
let cnv;
let cover,backcover,pageI,pageII;
let easycam;
let strCount = 0;
let str = ["回家鄉工作一直像是一個夢想","但我","並不是想一直待在我的家","我是希望","想陪伴家人的時候","我就能在家鄉","。"];
let boxSize = 3;
var state,viewport;


function preload() {
  cover=loadImage("00.png");
  backcover=loadImage("01.png");
  pageI=loadImage("02.png");
  pageII=loadImage("03.png");
}

function setup() {
  cnv = createCanvas(windowHeight, windowHeight,WEBGL);
//   cnv.attachMouseListeners();
//   pixelDensity(2);
//   frameRate(60);
  imageMode(CENTER);
  noStroke();

  easycam = createEasyCam({
    distance: 1200,
    center: [0, 0, 0]
  });
    easycam.setDistanceMin(600);
    easycam.setDistanceMax(1800);

    state = easycam.getState();
    _state = state;
    // print(state.rotation[0]);
    print("thank you");
    viewport = easycam.getViewport();
    // print(viewport[1]);
    // easycam.removeMouseListeners();
    // easycam.attachMouseListeners();

    button = createButton("Just Read Me !");
    button.mousePressed(userClick);
    button.position(windowWidth/2 - 45, windowHeight*0.93);
}

let count = 0;
let reset = false;
let open = 0;

function draw() {
    
    clickTrip();
    background('#ffc331');

    translate(0,hFix,0);
    rotateY(radians(count*0.2));
    // _state = state;
    // _state.rotation[2] -= count/1000.0;
    // // print(_state.rotation[0]);
    // easycam.setState(_state, 1);
    // // print(easycam.getState().rotation[0]);
    
    if(reset){
        count -= count/10;
        hFix += (300 - hFix)/10;
        if(count < 3 && hFix>297){
            reset =false;
            open = 1;
            // print("RESET");
        }
    }else if(open == 0){
        hFix = (hFix > 1) ?  hFix+(0 - hFix)/10 : hFix;
        count ++;
    
    }

    push();
    // fill('#e6daa8');
    fill(0);
    box(981,500,boxSize*2*0.9);
    pop();

    if(open == 0){
        push();
        texture(cover);
        // texture(pageI);
        translate(0,0,boxSize);
        // translate(0,500*4397/2237*-0.25,boxSize);
        plane(1000, 500);
        pop();
    }else if(open == 1){
        push();
        // texture(cover);
        texture(pageI);
        // translate(0,0,boxSize);
        let _f = pageI.height/cover.height;
        translate(0,500*_f*-0.25,boxSize);
        plane(1000, pageI.height/pageI.width*1000);
        pop();
    }else if(open == 2){
        push();
        // texture(cover);
        texture(pageII);
        // translate(0,0,boxSize);
        let _f = pageII.height/cover.height;
        translate(0,500*_f*-0.23,boxSize);
        plane(1000, 500*_f);
        pop();
    }

    push();
    translate(0,0,-1*boxSize);
    rotateY(radians(180));
    texture(backcover);
    plane(1000, 500);
    pop();

    if(frameCount%90==0){
        print(str[strCount%str.length]);
        strCount += 1;
    }

    if (mouseIsPressed === true) {

        console.log("ddddd");
    }

}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
}

let hFix = 0;

// function mousePressed(event) {
//     if (event.type == 'mousedown') {
//       // click action 
//       clickCount += 1;
//       clickTimer = clickTimerMax;  
//         // if(clickCount == 3){
//         //     clickCount = 0;
//         //     userClick();
//         // }
//     } else if(event.type == 'mouseup'){
//         if(clickCount == 3){
//             clickCount = 0;
//             userClick();
//         }
//     }

//     // print(event.type);
// }



function keyPressed() {
    userClick(); 
}

let clickCount = 0; 
let clickTimer = 100; 
let clickTimerMax = 100; 

function clickTrip(){
  if(clickCount > 0){
    clickTimer --;
    // print(clickTimer);
    if(clickTimer == 0){
      clickTimer = clickTimerMax;
      clickCount = 0;
    }
  }
}

  function userClick() {
    if(open ==0){
        reset =true;
    // open =1;
        easycam.setState(state, 2000);
        easycam.removeMouseListeners();
    }else if(open==1){
        open = 2;
    }else if(open==2){
        open = 0;
        easycam.attachMouseListeners();
    }

  }