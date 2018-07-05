class Boot extends Phaser.State{
    
    preload(){
        this.load.image('bg','assets/images/sky.png');
        this.load.image('loading_bar','assets/images/loader_bar.png');
        this.load.image('loading_bar_bg','assets/images/loader_bar_bg.png');
        this.load.image('loading_bar_text','assets/images/loading_text.png');
    }
    create(){   
        this.state.start('Preload');
    }
    update(){
        // this.state.start('Preload');
    }
}
export default Boot;