var submarineImg;
var underwater_background;
var rock1, rock2, rock3;
var gameoverImg
var score=0;


var PLAY = 1;
var END = 0;
var gameState = PLAY;




function preload() {
    submarineImg = loadImage("submarine.png");
    gameoverImg = loadImage("gameover.png")
    underwater_background = loadImage("background.png");
    rock1 = loadImage("rock.png");
    rock2 = loadImage("rock2.png");
    rock3 = loadImage("rock3.png");



}
function setup() {
    createCanvas = (1200, 300);
    

    scene = createSprite(400, 200)
    scene.addImage(underwater_background);
    scene.velocityX = -2.5;
    scene.scale = 0.8;

    submarine = createSprite(200, 250, 30, 30);
    submarine.addImage(submarineImg);
    submarine.scale = 0.1;





    rockGroup = new Group();

    score=0;
}

function draw() {
    background = (0);
    


    
    
    









    if (gameState === PLAY) {



        select_rock = Math.round(random(1, 4));

        if (World.frameCount % 40 == 0) {
            if (select_rock == 1) {
                s1();
            } else if (select_rock == 2) {
                s2();
            } else if (select_rock == 3) {
                s3();
            }
        }
        
        

        submarine.y = World.mouseY

        if (rockGroup.isTouching(submarine)) {
            gameState = END
        }

    }





    if (gameState === END) {

        submarine.velocityY = (0)
        scene.velocityX = (0)
        rockGroup.setVelocityXEach(0)
        rockGroup.setLifetimeEach(-1)

        gameover = createSprite(200, 250);
        gameover.addImage(gameoverImg)


    }






    if (scene.x < 0) {
        scene.x = 0;
        scene.x = scene.width;
        scene.x = scene.width / 4;
    }







    textSize(20);
    fill(200);
    text("score:"+score,200,250);
    score = score + Math.round(getFrameRate() / 60)
    
    

    drawSprites();
}

function s1() {
    stone1 = createSprite(400, Math.round(random(50, 335)), 10, 10);
    stone1.addImage(rock1);
    stone1.velocityX = -5;
    stone1.lifetime = 150
    stone1.scale = 0.5;
    rockGroup.add(stone1)
}

function s2() {
    stone2 = createSprite(400, Math.round(random(50, 335)), 10, 10);
    stone2.addImage(rock2);
    stone2.velocityX = -6;
    stone2.lifetime = 150
    stone2.scale = 0.2;
    rockGroup.add(stone2)
}

function s3() {
    stone3 = createSprite(400, Math.round(random(50, 335)), 10, 10);
    stone3.addImage(rock3);
    stone3.velocityX = -7;
    stone3.lifetime = 150
    stone3.scale = 0.1;
    rockGroup.add(stone3)


}












