class Form {
constructor(){
    this.input=createInput("name")
    this.button=createButton("play")
    this.title = createElement("h2")
    this.greeting=createElement("h3")
    this.restart=createButton("restart")
}
hide(){
    this.button.hide()
    this.greeting.hide()
    this.input.hide()
}

display(){
    this.title.html("car racing game")
    this.title.position(displayWidth/2-50,0)
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2,displayHeight/2)
    this.restart.position(displayWidth-100,20)

    //greeting.position(130,160)
    this.button.mousePressed( ()=>{
        this.input.hide()
        this.button.hide()
        player.name= this.input.value()
        // console.log(name)
        playerCount++
        player.playerCount=playerCount
        player.updateplayerCount(playerCount);
        player.update()
        this.greeting.html("hello "+ player.name)
        this.greeting.position(displayWidth/2,displayHeight/4)
    })
  this.restart.mousePressed(()=>{
    player.updateplayerCount(0)
    game.updateGameState(0)
    database.ref("/").child("Players").remove();

  })
}

}