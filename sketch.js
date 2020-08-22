var database,form,game,player,playerCount,gameState,allPlayers,car1,car2,car3,car4
var carArrays,car1Img,car2Img,car3Img,car4Img,trackImg,groundImg

function preload(){
    car1Img=loadImage("sprites/car1.png")
    car2Img=loadImage("sprites/car2.png")
    car3Img=loadImage("sprites/car3.png")
    car4Img=loadImage("sprites/car4.png")
    trackImg=loadImage("sprites/track.jpg")
    groundImg=loadImage("sprites/ground.png")
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)
database=firebase.database()
game=new Game()
gameState=0
game.getGameState()
game.start()

}


function draw(){
if(playerCount==4){
    game.updateGameState(1);
}
if(gameState==1){
    clear()
    game.play()
}
if(gameState==2){
game.end()
}
}