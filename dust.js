class Dust extends BaseClass {
    constructor (x,y,width,height) {
      super(x,y,width,height,true);
      this.image = loadImage("dustbingreen.png")    
     }
     display() {
     super.display();
    }
 };
  