class Player{
    constructor(){
         
        this.name = null ;
        this.distance = 0;
        this.index = 0;
        this.rank = 0;
        
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function (data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player"+ this.index ;
        var playerRef = database.ref(playerIndex);
        playerRef.update({
            name : this.name,
           distance : this.distance

        })
    }

   static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data )=>{
            allPlayers = data.val();
        })

    }

    getCarsAtEnd(){
        var carsAtEndRef = database.ref("carsAtEnd")
        carsAtEndRef.on("value", (data)=>{
            this.rank = data.val();
        })
    }

  static  updateCarsAtEnd(rank){
    var carsAtEndRef = database.ref("/");
    carsAtEndRef.update({
        carsAtEnd:rank
    })
    }

}