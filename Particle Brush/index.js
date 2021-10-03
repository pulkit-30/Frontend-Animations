/**
 * ParticleBrush By Ayush Kumar
 * @author <https://Ayush7614.github.io>
 */

 const CONFIG = {
    particleCount: 10,
    gravityX: 0,
    gravityY: -0.05,
    velocity: 0.6,
    HUE: 250,
    dieSpeed: 0.04,
  }
  
  let json = {
    "preset": "Default",
    "closed": false,
    "remembered": {
      "Default": {
        "0": {
          particleCount: 10,
          gravityX: 0,
          gravityY: -0.05,
          velocity: 0.7,
          HUE: 250,
          dieSpeed: 0.04,
        }
      },
      "Fire": {
        "0": {
          particleCount: 10,
          gravityX: 0,
          gravityY: 0.055,
          velocity: 0.8,
          HUE: 40,
        }
      },
    },
    "folders": {}
  }
  
  window.onload = function () {
    let canvas = document.getElementById('c');
    let ctx = canvas.getContext('2d');
    const WIDTH = canvas.width = window.innerWidth;
    const HEIGHT = canvas.height = window.innerHeight;
  
    CONFIG.saveImage = function () {
      var link = document.createElement('a');
      link.setAttribute('download', 'ParticleBrush_art.png');
      link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      link.click();
    }
  
    let gui = new dat.GUI({ load: json });
    gui.remember(CONFIG);
    gui.add(CONFIG, 'particleCount', 0, 100, 0.01).name("Particle Count");;
    gui.add(CONFIG, 'velocity', -1, 1, 0.01).name("Velocity");
    gui.add(CONFIG, 'gravityX', -1, 1, 0.001);
    gui.add(CONFIG, 'gravityY', -1, 1, 0.001);
    gui.add(CONFIG, 'HUE', 0, 360, 1);
    gui.add(CONFIG, 'dieSpeed', 0, 0.1, 0.001).name("Die Speed");
    gui.add(CONFIG, 'saveImage').name("Save Artwork");
  
    let particles = [];
  
    let mouse = { x: 0, y: 0 }
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });
    canvas.addEventListener('touchmove', function (e) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    });
  
    let MOUSE_DOWN = false;
    canvas.addEventListener('mousedown', function (e) {
      MOUSE_DOWN = true;
    })
    canvas.addEventListener('mouseup', function (e) {
      MOUSE_DOWN = false;
    })
    canvas.addEventListener('touchstart', function (e) {
      MOUSE_DOWN = true;
    })
    canvas.addEventListener('touchend', function (e) {
      MOUSE_DOWN = false;
    })
  
    // Animation Loop
    function animate() {
      const GRAVITY = { x: CONFIG.gravityX, y: CONFIG.gravityY };
  
      ctx.save();
      ctx.globalCompositeOperation = 'destination-atop'
      let grd = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, WIDTH);
      grd.addColorStop(0, "rgba(20, 20, 20, 1)");
      grd.addColorStop(1, "rgba(0, 0, 30, 1)");
      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.restore();
  
      if (MOUSE_DOWN) {
        for (let i = 0; i < CONFIG.particleCount; i++) {
          particles.push(new Particle(mouse.x, mouse.y, `hsl(${Math.random() * CONFIG.HUE}, 100%, 50%)`));
        }
      }
  
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.applyForce(GRAVITY);
        p.update();
        p.render(ctx);
  
        if (p.isDead()) {
          particles.splice(i, 1);
        }
      }
  
      requestAnimationFrame(animate);
    }
    animate();
  
  
  
  }