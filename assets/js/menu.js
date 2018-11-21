var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
         game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        menuImage = game.add.sprite(0,0,"menu");

        menuImage.height = game.height;
        menuImage.width = game.width;

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};