let loadingBarText,loadingBarBg,loadingBar,loadingScale;
export default class Preload extends Phaser.State{
        
    create(){
       
        this.add.image(0,0,'bg');
        this.load.onLoadStart.add(this.loading, this);
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        
        this.startLoading();
        
    }
    startLoading(){
        this.load.image('1984_nocooper_space','assets/images/1984-nocooper-space.png');
        this.load.image('acryl_bladerunner','assets/images/acryl_bladerunner.png');
        this.load.image('acryl_bobablast','assets/images/acryl_bobablast.png');
        this.load.image('agent-t-buggin-acf_logo','assets/images/agent-t-buggin-acf_logo.png');
        this.load.image('alex-bisleys_horsy_5','assets/images/alex-bisleys_horsy_5.png');
        this.load.image('alex-bisleys_horsy_512x512','assets/images/alex-bisleys_horsy_512x512.png');
        this.load.audio('menu_select','assets/audio/menu_select.mp3');
        this.load.audio('menu_switch','assets/audio/menu_switch.mp3');
        this.load.video('sample','assets/video/MP4_HPL40_30fps_channel_id_51.mp4');
    
        this.load.start();
    }

    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

        console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        
        if(loadingScale < 2){
            console.log(loadingBar.scale.x);
            loadingScale = totalLoaded/totalFiles;
            loadingBar.scale.set(loadingScale,1);
            
        
        }
        
    }
    
    loading(){
        
        loadingBarText = this.add.image(this.game.width/2,this.game.height/2,'loading_bar_text');
        loadingBarText.anchor.set(0.5);
    
        loadingBarBg = this.add.image(0,0,'loading_bar_bg');
        loadingBarBg.anchor.set(0.5);
        loadingBarBg.alignIn(loadingBarText,Phaser.BOTTOM_CENTER,0,20);
    
        
        loadingBar = this.add.image(0,0,'loading_bar');
        // loadingBar.anchor.set(0.5);
        loadingBar.alignIn(loadingBarText,Phaser.BOTTOM_CENTER,0,22);
        loadingBar.scale.set(0,1);
        loadingScale = loadingBar.scale.x;
        
            
    }
    loadComplete(){
        // loadingBar.visible = false;
        // loadingBarBg.visible = false;
        // loadingBarText.visible = false;
        this.state.start('GameStart');
        
    
    }
    

}
export {loadingBarText,loadingBarBg,loadingBar,loadingScale};

