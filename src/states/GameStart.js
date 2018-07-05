import {loadingBarText,loadingBarBg,loadingBar,loadingScale} from './Preload.js';
export default class GameStart extends Phaser.State{
    
    create(){
        loadingBar.visible = false;
        loadingBarBg.visible = false;
        loadingBarText.visible = false;
        this.video = this.add.video('sample');
        this.video.play(true);
        this.video.addToWorld(400, 300, 0.5, 0.5, 0.5, 0.5);
        
    }

}
