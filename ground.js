class Ground{
constructor(x,y,w,h){
var options = {
isStatic: true
}
this.body = Bodies.rectangle(x,y,w,h,options);
this.w=w
this.h=h
world.add(world,this.body)

}
display(){
    var pos = this.body.position;
    rectmode(centre);
     fill("white");
    rect(pos.x,pos.y,this.w,this.h)
}
}