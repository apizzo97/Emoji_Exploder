
//Game file used to run Emoji_Exploder

var game = new Phaser.Game(1400, 700, Phaser.AUTO, "",
    {preload: preload, create: create, update: update
    });

var background;
var cannon_wheel;
var cannon;
var cat;
var heart;
var poop;
var scream;
var tears;
var tongue;
var upsideDown;
var scoreText;
var score = 0;
var textStyle;
var startButton;
var endGame;
var endButton;
var livesText;
var lostLivesText;
var lifeCounter = 3;
var music;
var cannonBalls;
var cannonTime = 0;
var cursors;
var cannonBall;
var emojis;
var fireRate = 100;
var hitCounter;



function preload(){
    console.log(game);
    //make responsive
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    //load background
    game.stage.backgroundColor = ("#FFFFFF");
    game.load.image("background", "assets/background.png" );

    //load cannon, cannonBall and cannonBall wheel
    game.load.image("cannon_wheel", "assets/cannon-wheel.png");
    game.load.image("cannon", "assets/cannon.png");
    game.load.image("cannonBall", "assets/cannonBall.png");

    //load emojis
    game.load.image("cat", "assets/cat-emoji.png");
    game.load.image("heart", "assets/heart-emoji.png");
    game.load.image("poop", "assets/poop-emoji.png");
    game.load.image("screaming", "assets/screaming-emoji.png");
    game.load.image("tears", "assets/tears-emoji.png");
    game.load.image("tongue", "assets/tongue-emoji.png");
    game.load.image("upsideDown", "assets/upsidedown-emoji.png");

    //start button
    game.load.image("startButton", "assets/button.png");

    //game music
    game.load.audio("music", "asssets/GameMusic.mp3");



}

function create(){
    console.log(game);
    //background
    background = game.add.tileSprite(0, 0,1400,700,"background");
    background.sendToBack(this);

    //cannon wheel
    cannon_wheel = game.add.sprite(50, 570, "cannon_wheel");
    cannon_wheel.moveUp(cannon_wheel);

    //cannonBall
    cannonBall = game.add.sprite(110, 550, "cannonBall");

    //cannon
    cannon = game.add.sprite(110, 550, "cannon");
    cannon.anchor.setTo(0.5);
    cannon.bringToTop();


    //emojis
    cat = game.add.sprite(1300, 20, "cat");
    heart = game.add.sprite(2100, 95, "heart");
    poop = game.add.sprite(2400, 180, "poop");
    scream = game.add.sprite(2700, 255, "screaming");
    tears = game.add.sprite(3000, 330, "tears");
    tongue = game.add.sprite(3300, 405, "tongue");
    upsideDown = game.add.sprite(3600, 480, "upsideDown");
    emojis = game.add.group();
    emojis.add(cat);
    emojis.add(heart);
    emojis.add(scream);
    emojis.add(tears);
    emojis.add(tongue);
    emojis.add(upsideDown);


    //score
    textStyle = { font: "36px Georgia", fill: "#000000" };
    scoreText = game.add.text(800, 610, "Points: 0", textStyle);

    //lives
    livesText = game.add.text(1200, 610, "Lives: " + lifeCounter, textStyle);
    livesText.anchor.set(1,0);
    lostLivesText = game.add.text(game.world.width*.5, game.world.height*.5, "You lost a life. Tap to continue", textStyle);
    lostLivesText.anchor.set(.5);
    lostLivesText.visible = false;

    //add physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(cannonBall, Phaser.Physics.ARCADE);
    game.physics.enable(cat, Phaser.Physics.ARCADE);
    game.physics.enable(heart, Phaser.Physics.ARCADE);
    game.physics.enable(poop, Phaser.Physics.ARCADE);
    game.physics.enable(scream, Phaser.Physics.ARCADE);
    game.physics.enable(tears, Phaser.Physics.ARCADE);
    game.physics.enable(tongue, Phaser.Physics.ARCADE);
    game.physics.enable(upsideDown, Phaser.Physics.ARCADE);
    game.physics.enable(cannon, Phaser.Physics.ARCADE);
    game.physics.enable(cannonBalls, Phaser.Physics.ARCADE);

    //start button
    //startButton = game.add.button(game.world.width*.5, game.world.height*.5, "startButton", startGame, this, 2, 1, 0);
   // startButton.bringToTop();
   // startButton.anchor.set(0.5);

    //music
    music = game.add.audio("music");

    //cursor keys
    cursors = game.input.keyboard.createCursorKeys();






}

function update() {
    game.physics.arcade.collide(cannonBall, emojis, ballHitsEmojis);
    game.physics.arcade.collide(cannonBall, poop, ballHitsPoop);

    //checks if fire button was pressed
    if (game.input.activePointer.isDown) {
        fireBullet();
        if (cannonBall.x >= 1300 || cannonBall.x <= 0 && cannonBall.y >= 500 || cannonBall.y <= 200) {
            cannonBall.reset(110, 550);
        }
    }

    if (lifeCounter === 0) {
        gameOver();
    }

    //rotates cannon
    cannon.rotation = game.physics.arcade.angleToPointer(cannon);

    //emoji movements

    game.physics.arcade.moveToXY(cat, -150, 0, 110);
    if (cat.x <= -100) {
        resetImage(cat, 1800, 20);
    }

    game.physics.arcade.moveToXY(heart, -200, 95, 150);
    if (heart.x <= -150) {
        resetImage(heart, 2100, 95);
    }
    game.physics.arcade.moveToXY(poop, -250, 180, 200);
    if (poop.x <= -200) {
        resetImage(poop, 2400, 180);
    }
    game.physics.arcade.moveToXY(scream, -300, 255, 150);
    if (cat.x <= -250) {
        resetImage(scream, 2700, 255);
    }
    game.physics.arcade.moveToXY(tears, -350, 330, 150);
    if (tears.x <= -300 ) {
        resetImage(tears, 3000, 330);
    }
    game.physics.arcade.moveToXY(tongue, -400, 405, 200);
    if (tongue.x <= -350) {
        resetImage(tongue, 3300, 405);
    }
    game.physics.arcade.moveToXY(upsideDown, -450, 300, 150);
    if (upsideDown.x <= -400) {
        resetImage(upsideDown, 3600, 480);
    }

}



    function resetImage(image,x,y) {
        image.reset(x, y);
    }

    function resetAllObjects() {
        resetImage(cat,1800, 20);
        resetImage(heart, 2100, 95);
        resetImage(scream, 2700, 255);
        resetImage(tears, 3000, 330);
        resetImage(tongue, 3300, 405);
        resetImage(upsideDown, 3600, 480);
        resetImage(cannonBall, 110, 550);
    }



    function ballHitsEmojis(cannonBall, emojis){
        var killTween = game.add.tween(emojis.scale);
            killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
            killTween.onComplete.addOnce(function(){
                emojis.kill();
                 }, this);
                 killTween.start();
                 score = score + 10;
                 cannonBall.reset(110, 550);
                 scoreText.setText("Points: " + score);
                 if (score === 60) {
                     alert("You won");
                     location.reload();
                 }

             }


             function ballHitsPoop(){
                 lifeCounter--;
                 if(lifeCounter) {
                     livesText.setText("Lives: " + lifeCounter);
                     lostLivesText.visible = true;
                     cannonBall.reset(110, 550);
                     poop.reset(2400, 180);
                     game.input.onDown.addOnce(function () {
                         lostLivesText.visible = false;
                     }, this);
                 }
                 else{
                     alert("Game over, you lost!");
                     location.reload();
                 }
             }




             function fireBullet() {
                 if (game.time.now > cannonTime)  {
                     cannonTime = game.time.now + fireRate;
                     game.physics.arcade.moveToPointer(cannonBall, 300, game.input.activePointer, 1000);



                 }
             }



    function gameOver() {
        endGame = game.add.text(700, 200, "Game Over", {font: "100px Georgia", fill: "#fff"});
        endGame.anchor.setTo(0.5);
        endGame.align = "center";
        endButton = Phaser.button(this, 700, 300, "Retry", "Retry", resetAllObjects, this)


    }
   //function startGame(){
      //startButton.destroy();

   //}


