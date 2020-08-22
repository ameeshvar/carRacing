class Player {
    constructor(){
    this.distance=0
    this.name=0
    this.playerCount=0
    }
    getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",function (data){
        playerCount=data.val()})
    }
 updateplayerCount(state){
     database.ref("/").update({
         playerCount:state
     })
 }
 update(){
     var playerIndex="Players/player"+this.playerCount
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance

    })
}
static getAllPlayerInfo(){
var playerRef=database.ref("Players");
playerRef.on("value",function (data){
allPlayers=data.val()
})

}
}