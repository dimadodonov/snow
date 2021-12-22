var ars_c = document.getElementById('ars_canv'),
ars_$ = ars_c.getContext("2d");

var ars_w = ars_c.width = window.innerWidth,
ars_h = ars_c.height = window.innerHeight;

ars_Snowy();

function ars_Snowy() {
  var ars_snow, arr = [];
  var ars_num = 300, tsc = 1, sp = 1;
  var ars_sc = 1.3, t = 0, mv = 20, min = 1;
  
  for (var i = 0; i < ars_num; ++i) {
    ars_snow = new ars_Flake();
    ars_snow.y = Math.random() * (ars_h + 50);
    ars_snow.x = Math.random() * ars_w;
    ars_snow.t = Math.random() * (Math.PI * 2);
    ars_snow.sz = (100 / (10 + (Math.random() * 100))) * ars_sc;
    ars_snow.sp = (Math.pow(ars_snow.sz * .8, 2) * .15) * sp;
    ars_snow.sp = ars_snow.sp < min ? min : ars_snow.sp;
    arr.push(ars_snow);
  }
  
  ars_go();
  
  function ars_go(){
    window.requestAnimationFrame(ars_go);

    ars_$.clearRect(0, 0, ars_w, ars_h);
    // ars_$.fillStyle = 'hsla(242, 95%, 3%, 1)';
    ars_$.fillRect(0, 0, ars_w, ars_h);
    ars_$.fill();

    for (var i = 0; i < arr.length; ++i) {
      f = arr[i];
      f.t += .05;
      f.t = f.t >= Math.PI * 2 ? 0 : f.t;
      f.y += f.sp;
      f.x += Math.sin(f.t * tsc) * (f.sz * .3);
      if (f.y > ars_h + 50) f.y = -10 - Math.random() * mv;
      if (f.x > ars_w + mv) f.x = - mv;
      if (f.x < - mv) f.x = ars_w + mv;
      f.draw();
    }
  }
  
  function ars_Flake() {
    this.draw = function() {
      this.g = ars_$.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      ars_$.moveTo(this.x, this.y);
      ars_$.fillStyle = this.g;
      ars_$.beginPath();
      ars_$.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      ars_$.fill();
    }
  }
  
}

var textDev = document.getElementById('text_dev');

function animateTextDev() {
  textDev.classList.add('show');
}
setTimeout(animateTextDev, 1000);