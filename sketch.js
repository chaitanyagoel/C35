var ball;
var db, position ;

function setup(){
    db = firebase.database();
    console.log(db);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

   var ref1=db.ref('ball/position')
   ref1.on("value",readPosition,showError);
}

function draw(){
    background("white")
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

function changePosition(x,y){
 db.ref('ball/position').set({
     x:position.x + x,
     y:position.y + y
 })
}

function showError(){
    console.log("Error");

}


function readPosition(data){
    position=data.val()
   ball.x=position.x
   ball.y=position.y
}