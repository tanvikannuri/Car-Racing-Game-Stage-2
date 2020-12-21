class Form {

  constructor() {
    //This is to creatye the first slide of the game.
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    //This is to hide the first slide.
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    //This is to display the game in the output.
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    //This is to display the input,button and reset in the output.
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    //This is to hide the buttons.
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    //This is to press the button of the reset button.
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
    });   
 
 
  }
}
