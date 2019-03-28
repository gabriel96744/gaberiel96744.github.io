function barrier(){
  this.leftPull = 1;
  this.velocity = 5;
  this.width = 100;
  this.height = 100;
 this.y = Math.floor((Math.random()*h)-50);
  this.x = w + this.width;
  this.show = function(){
    this.x;
    this.y;
    fill(color('blue'));
    rect(this.x, this.y, this.width,this.height);
  }
  this.update = function(){
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  }
  
}