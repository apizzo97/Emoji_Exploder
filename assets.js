
//This file will contain functions for each of the assets


var emojiAssets = {

    preload: function () {
        game.load.spritesheet("cat", "assets/cat-emoji.png", 300, 300, 20);
        game.load.spritesheet("heart", "assets/heart-emoji.png", 300, 300, 20);
        game.load.spritesheet("poop", "assets/poop-emoji.png", 480, 480, 20);
        game.load.spritesheet("screaming", "assets/screaming-emoji.png", 300, 300, 20);
        game.load.spritesheet("tears", "assets/tears-emoji.png", 300, 300, 20);
        game.load.spritesheet("tongue", "assets/tongue-emoji.png", 300, 300, 20);
        game.load.spritesheet("upsidedown", "assets/upsidedown-emoji.png", 480, 480, 20);
    },

    create: function () {
        this.cat = game.add.sprite(800, 2500, "cat");
        this.heart = game.add.sprite(800, 2800, "heart");
        this.poop = game.add.sprite(1000, 2100, "poop");
        this.screaming = game.add.sprite(800, 2500, "screaming");
        this.tears = game.add.sprite(500, 2000, "tears");
        this.tongue = game.add.sprite(800, 2500, "tongue");
        this.upsidedown = game.add.sprite(800, 2500, "upsidedown");


    }

};

var cannonAssests = {

    preload: function () {
        game.load.spritesheet("cannon", "assets/cannon.png", 79, 113, 40);
        game.load.spritesheet("cannon_wheel", "assets/cannon-wheel.png", 45, 47, 10);
        game.load.spritesheet("ball", "assets/cannonball.png", 24, 23, 10);

    },

    create: function () {
        this.cannon = game.add.sprite(100, 800, "cannon");
        this.cannon_wheel = game.add.sprite(50, 700, "cannon_wheel");
    }
};