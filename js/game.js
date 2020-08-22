class Game {
        constructor(){

        }
        getGameState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function (data){
            gameState=data.val()})
        }
     updateGameState(state){
         database.ref("/").update({
             gameState:state
         })
     }
    async start(){
         console.log(gameState)
         if(gameState == 0){
              player=new Player();
              var playerCountRef=await database.ref("playerCount").once("value");
              if(playerCountRef.exists()){
              playerCount=playerCountRef.val()
              player.getCount()
              

              }
              form=new Form();
            form.display();
            console.log("help")
         }
         car1=createSprite(100,200)
         car1.addImage("car1",car1Img)
         car2=createSprite(300,200)
         car2.addImage("car2",car2Img)
         car3=createSprite(500,200)
         car3.addImage("car3",car3Img)
         car4=createSprite(700,200)
         car4.addImage("car4",car4Img)
         carArrays=[car1,car2,car3,car4];

     }
     play(){
         form.hide()
         text("game start",100,100)
         Player.getAllPlayerInfo()
         if(allPlayers!= undefined ){
             background("#c68767")
             image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)

            var index=0
            var x=265
            var y=0
             //var displayPosition=(130)
             for(var i in allPlayers){
                 index=index+1
                 x=x+200
                 y=displayHeight-allPlayers[i].distance
                 carArrays[index-1].x=x
                 carArrays[index-1].y=y
                
                 if(index == player.playerCount){
                     carArrays[index-1].shapeColor="red"
                     camera.position.x=displayWidth/2
                     camera.position.y=carArrays[index-1].y
                     ellipse(x,y,60,60)
                 }
                  
                
             }

         }
         if(keyDown(UP_ARROW)&&player.playerCount!= null){
             player.distance=player.distance+50
             player.update()

         }

         if (player.distance==4100){
            gameState=2
         }
         drawSprites();

     }
     end(){
        game.updateGameState(2)  
     }
}