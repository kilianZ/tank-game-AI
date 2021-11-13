

class Tank {
  this.w = 20;
  this.h = 30;
  this.drawing = [
    [0.5*this.w, 0.5*this.h],
    [0.5*this.w, -0.5*this.h],
    [-0.5*this.w, -0.5*this.h],
    [-0.5*this.w, 0.5*this.h]
  ]
  constructor(x, y){
    this.x, this.y = x, y
    this.dir = 0
    this.spd = 0
  }
  draw(ctx){


    ctx.beginPath();
    let A = []
    ctx.moveTo()
  }
  rot(x, y, a){
    return [x*Math.cos(a) - y*Math.sin(a), x*sin(a) - y*cos(a)]
  }

}
