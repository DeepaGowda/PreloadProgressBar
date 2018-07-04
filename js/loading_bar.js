var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload : preload,create : create, update : update},true);
let bg,loadingBarBg,loadingBar,loadingBarText,loadingScale,video;
function preload(){
    game.load.image('bg','images/sky.png');
    game.load.image('loading_bar','images/loader_bar.png');
    game.load.image('loading_bar_bg','images/loader_bar_bg.png');
    game.load.image('loading_bar_text','images/loading_text.png');
    

}
function create(){   
    bg = game.add.image(0,0,'bg');
    game.load.onLoadStart.add(loading, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    
    startLoading();
    

    

}
function startLoading(){
    game.load.image('1984_nocooper_space','images/1984-nocooper-space.png');
    game.load.image('acryl_bladerunner','images/acryl_bladerunner.png');
    game.load.image('acryl_bobablast','images/acryl_bobablast.png');
    game.load.image('agent-t-buggin-acf_logo','images/agent-t-buggin-acf_logo.png');
    game.load.image('alex-bisleys_horsy_5','images/alex-bisleys_horsy_5.png');
    game.load.image('alex-bisleys_horsy_512x512','images/alex-bisleys_horsy_512x512.png');
    game.load.audio('menu_select','audio/menu_select.mp3');
    game.load.audio('menu_switch','audio/menu_switch.mp3');
    game.load.video('sample','video/MP4_HPL40_30fps_channel_id_51.mp4');

    game.load.start();

}
function update(){
    
}
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

    console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    
    if(loadingScale < 2){
        console.log(loadingBar.scale.x);
        loadingScale = totalLoaded/totalFiles;
        loadingBar.scale.set(loadingScale,1);
        
    
    }
    
}

function loading(){
    loadingBarText = game.add.image(game.width/2,game.height/2,'loading_bar_text');
    loadingBarText.anchor.set(0.5);

    loadingBarBg = game.add.image(0,0,'loading_bar_bg');
    loadingBarBg.anchor.set(0.5);
    loadingBarBg.alignIn(loadingBarText,Phaser.BOTTOM_CENTER,0,20);

    
    loadingBar = game.add.image(0,0,'loading_bar');
    // loadingBar.anchor.set(0.5);
    loadingBar.alignIn(loadingBarText,Phaser.BOTTOM_CENTER,0,22);
    loadingBar.scale.set(0,1);
    console.log(3.3 < 1 );
    loadingScale = loadingBar.scale.x;
    
        
}
function loadComplete(){
    loadingBar.visible = false;
    loadingBarBg.visible = false;
    loadingBarText.visible = false;
    video = game.add.video('sample');
    video.play(true);
    video.addToWorld(400, 300, 0.5, 0.5, 0.5, 0.5);

}