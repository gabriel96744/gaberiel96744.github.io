function platform(){
  this.x = 0;
  this.y = h+100;
  this.height = 100;
  this.width = w;

  this.show = function(){

    (fill(color("tan")));
  rect(this.x,this.y,this.height,this.width);
};
  
}