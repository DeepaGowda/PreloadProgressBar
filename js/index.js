import Boot from '/states/Boot.js';
import Preload from '/states/Preload.js';
import GameStart from '/states/GameStart.js';

class Game extends Phaser.Game{
    
    constructor() {
        
        super(800, 600,Phaser.AUTO);
 
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('GameStart', GameStart, false);
        
 
        this.state.start('Boot'); 
}
}
var game = new Game();