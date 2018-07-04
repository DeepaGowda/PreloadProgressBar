export default class GameStart extends Phaser.State{
    
    create(){
        this.video = this.add.video('sample');
        this.video.play(true);
        this.video.addToWorld(400, 300, 0.5, 0.5, 0.5, 0.5);
        
    }

}
