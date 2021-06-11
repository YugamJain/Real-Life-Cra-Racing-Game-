
var database;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var track;
var car1Image,car2Image,car3Image,car4Image;
var leaderBoardImage,leaderBoard;
var carSound;

function preload(){

track = loadImage("images/track.jpg");
car1Image = loadImage("images/car1.png");
car2Image = loadImage("images/car2.png");
car3Image = loadImage("images/car3.png");
car4Image = loadImage("images/car4.png");
leaderBoardImage = loadImage("images/LeaderBoard.png");
carSound = loadSound("car-racing.mp3");

}



function setup(){
    createCanvas(displayWidth-200,displayHeight-250);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    leaderBoard = createSprite (displayWidth/2,-(displayHeight*4+100));
    leaderBoard.addImage(leaderBoardImage);
   // leaderBoard.visible=false;


}

function draw(){
    background("white");
  if (playerCount === 4){
      game.update(1);
  }    
   if (gameState === 1){
       game.play();
   }
   
if (gameState===2){
game.end();

} 
}

