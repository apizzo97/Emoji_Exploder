
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


var emoji_motion = new Function()

    create: function () {
        this.sprite.anchor.set(0.5)


    }

