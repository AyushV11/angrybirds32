class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=225
  }
display()
{
  if(this.body.speed<3){
    super.display();
  }
  else{
    World.remove(world,this.body)
    push ()
    tint (225,this.visibility)
    super.display()
    this.visibility -=5
    pop ()
  }
  console.log(this.body.speed)


}
};
