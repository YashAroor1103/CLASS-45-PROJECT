class Button {
    constructor(){
        this.button = createButton('PLAY');
        
    }


display(){
        this.button.position(displayWidth/2 + 20, displayHeight/2 + 85);

        this.button.mousePressed(() =>{
            gameState = 1;
            this.button.hide();
        }) 
}

}
