var hypnoticball;
var database;
var position;


function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticBallPosition=database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position=data.val();
    hypnoticball.x = position.x ;
  hypnoticball.y = position.y;
}

function changePosition(){
    database.ref('ball/position').set({  
        'x':position.x+x,
            'y':position.y+y
        })
    }
function showerror(){
    console.log("error");
}
