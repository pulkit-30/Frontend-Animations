/**
 * @class Particle
 * @author <Ayush Kumar>
 */
 class Particle {
    constructor(x, y, color) {
      this.pos = { x: x, y: y };
  
      let min = CONFIG.velocity;
      let max = min*2;
      this.vel = { x: min - Math.random() * max, y: min - Math.random() * max };
      this.acc = { x: min - Math.random() * max, y: min - Math.random() * max };
  
      this.health = 1;
      this.dieRate = CONFIG.dieSpeed;
  
      this.color = color;
    }
  
    applyForce(f) {
      this.acc.x += f.x;
      this.acc.y += f.y;
    }
  
    isDead() {
      return (this.health < 0);
    }
  
    update() {
      this.health -= this.dieRate;
      
      // physics velocity += acceleration | position += velocity
      this.vel.x += this.acc.x;
      this.vel.y += this.acc.y;
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
  
      // reset the acceleration
      this.acc.x *= 0;
      this.acc.y *= 0;
    }
  
    render(ctx) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter'
      ctx.globalAlpha = (this.health < 0) ? 0 : this.health; // ternary
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, 1, 1);
      
      // second trails
      ctx.globalCompositeOperation = 'xor'
      ctx.globalAlpha = 0.2; // ternary
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, 1, 1);
      ctx.restore();
    }
  }