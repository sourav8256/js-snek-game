var game;

const Presets = {
    'width': window.innerWidth < 480 ? 480 : window.innerWidth,
    'height': window.innerHeight - 32 < 320 ? 320 : window.innerHeight
}

game = new Phaser.Game(Presets.width, Presets.height, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);


game.state.start('Menu');