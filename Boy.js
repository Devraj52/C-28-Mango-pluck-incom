class Boy extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/boy.png");
    }
    display(){
      super.display();
    }
  }