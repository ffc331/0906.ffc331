let easycam;

function setup(){
    createCanvas(windowHeight, windowHeight,WEBGL);
    // easycam = createEasyCam({
    //     distance: 1200,
    //     center: [0, 0, 0]
    //   });
    //     easycam.setDistanceMin(600);
    //     easycam.setDistanceMax(1800);
}

function draw(){
    background(255);
}

function mousePressed(event) {
    if (event.type == 'mousedown') {
      // click action 

    } else if(event.type == 'mouseup'){

    }

    print(event.type);
  }