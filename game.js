
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
var arrowRight;
var arrowLeft;
var arrowText;
var scoreText;
var score = 0;
var textStyle;
var playing = false;
var startButton;
var endGame;
var endButton;
var livesText;
var lostLivesText;
var lifeCounter = 3;
var music;
var cannonBalls;
var cannonTime = 0;
var fireButton;
var cursors;
var cannonBall;
var weapon;
var emojis;



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

    //load arrows
    game.load.image("arrowRight", "assets/triangle-right.png");
    game.load.image("arrowLeft", "assets/triangle-left.png");

    //start button
    game.load.image("startButton", "assets/button.png");

    //game music
    game.load.audio("music", "GameMusic.mpg");



}

function create(){
    console.log(game);
    //background
    background = game.add.tileSprite(0, 0,1400,700,"background");
    background.sendToBack(this);

    //cannon wheel
    cannon_wheel = game.add.sprite(50, 570, "cannon_wheel");
    cannon_wheel.moveUp(cannon_wheel);

    //cannon
    cannon = game.add.sprite(110, 550, "cannon");
    cannon.anchor.setTo(0.5);


    //emojis
    cat = game.add.sprite(1300, 20, "cat");
    heart = game.add.sprite(1300, 95, "heart");
    poop = game.add.sprite(1300, 180, "poop");
    scream = game.add.sprite(1300, 255, "screaming");
    tears = game.add.sprite(1300, 330, "tears");
    tongue = game.add.sprite(1300, 405, "tongue");
    upsideDown = game.add.sprite(1300, 480, "upsideDown");
    emojis = game.add.group();
    emojis.add(cat);
    emojis.add(heart);
    emojis.add(scream);
    emojis.add(tears);
    emojis.add(tongue);
    emojis.add(upsideDown);

    //cannonBall
    cannonBall = game.add.sprite(600, 300, "cannonBall");

    //arrows
    arrowLeft = game.add.sprite(400,600,"arrowLeft");
    arrowRight = game.add.sprite(475, 600, "arrowRight");

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
    startButton = game.add.button(game.world.width*.5, game.world.height*.5, "startButton", startGame, this, 1, 0, 2);
    startButton.anchor.set(.5);

    //music
    music = game.add.audio("music");

    //cursor keys
    cursors = game.input.keyboard.createCursorKeys();

    //setup cannon weapon
    weapon = game.add.Weapon(1, "cannonBall");
    weapon.bulletKillType = Phaser.weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 400;
    weapon.trackRotation(cannon.rotation);


    //fire button
    fireButton = game.input.addKey(Phaser.keyboard.SPACEBAR);





}

function update() {
    game.physics.arcade.collide(cannonBall, emojis, ballHitsEmojis);
    game.physics.arcade.collide(cannonBall, poop, ballHitsPoop);


    //rotates cannon
    cannon.rotation = game.physics.arcade.angleToPointer(cannon);
}

//function destroyImage(image) {
//if (image.x <= -70) {
// image.destroy();
//}

//function gameLoop() {
//game.physics.arcade.accelerateToXY(cat, -90, 20, 70, 80, 80);
//destroyImage(cat);
//game.physics.arcade.accelerateToXY(heart, -90, 95, 70, 80, 80);
// destroyImage(heart);
// game.physics.arcade.accelerateToXY(poop, -90, 180, 70, 80, 80);
//  destroyImage(poop);
//  game.physics.arcade.accelerateToXY(scream, -90, 255, 70, 80, 80);
//  destroyImage(scream);
//   game.physics.arcade.accelerateToXY(tears, -90, 330, 70, 80, 80);
//  destroyImage(tears);
//   game.physics.arcade.accelerateToXY(tongue, -90, 405, 70, 80, 80);
//   destroyImage(tongue);
//    game.physics.arcade.accelerateToXY(upsideDown,-90, 480, 70, 80, 80);
//    destroyImage(upsideDown);
// }



function ballHitsEmojis(cannonBall, emojis){
    var killTween = game.add.tween(emojis.scale);
    killTween.to({x: 0, y: 0}, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function(){
        emojis.kill();
    }, this);
    killTween.start();
    score += 10;
    scoreText.setText("Points: " + score);
}

function ballHitsPoop(){
    lifeCounter--;
    if(lifeCounter) {
        livesText.setText("Lives: " + lifeCounter);
        lostLivesText.visible = true;
        cannonBall.reset();
        game.input.onDown.addOnce(function () {
            lostLivesText.visible = false;
        }, this);
    }
    else{
        alert("Game over, you lost!");
        location.reload();
    }
}




/*      function fireBullet() {
                 if (game.time.now > cannonTime) {
          }
              cannonBall = cannonBalls.getFirstExists(false);
              if (cannonBall) {
                 cannonBall.reset(cannonBall.x, cannonBall.y);
                 cannonBall.body.velocity.y = -400;
                  cannonTime = game.time.now + 200;
              }

          }*/



// function gameOver() {
//timeLabel1.text.opacity = 0;
// endGame = game.add.text(700, 200, "Game Over", {font: "100px Georgia", fill: "#fff"});
// endGame.anchor.setTo(0.5);
//  endGame.align = "center";
//endButton = Phaser.button(this, 700, 300, "Retry", "Retry", restartGame, this)


//}
function startGame(){
    startButton.destroy();
    playing = true;
    //music.play("music");
    //cannon.rotation = game.physics.arcade.angleToPointer(cannon);

}


