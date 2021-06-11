class Game{

    constructor(){    




    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function (data){
            gameState = data.val()
        })
    }

    update(state){
        var gameStateRef = database.ref("/");
        gameStateRef.update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Image);
        car2 = createSprite(300,200);
        car2.addImage(car2Image);
        car3 = createSprite(500,200);
        car3.addImage(car3Image);
        car4 = createSprite(700,200);
        car4.addImage(car4Image);
        
        cars = [car1,car2,car3,car4];

    }
    
    play(){
        background("#c68767");
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        form.greeting.hide();
        textSize(30);
        text("Game Starts",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd()
        if (allPlayers != undefined){
            var x = 175;
            var y ;
            var index = 0;
            for(var plr in allPlayers){
             index = index+1
                x = x+250;              
                y = displayHeight-allPlayers[plr].distance-150;
                cars[index-1].x = x; 
                cars[index-1].y = y;

                if(index === player.index){
                   cars[index-1].shapeColor = "red";
                   
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    fill("red");
                    stroke(10);
                    ellipse (x,y,60,60);
                }

            }


            
        }
        if(keyDown("up")&& player.index != 0){
            carSound.play();
           player.distance = player.distance+50; 
           player.update();

        }

        if (player.distance>6000){
            gameState = 2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank);

        }


        drawSprites();


    }

    end(){
        console.log("Game Ends")
        //leaderBoard.visible=true;
        textSize(20);
        fill("black");
        text(player.rank,displayWidth/2-20,-(displayHeight*4));
    
    }



}


