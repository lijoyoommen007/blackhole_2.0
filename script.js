const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.setLineDash([15, 25]);

let radius = 20;
let radius2 = 20;
let maxRadius = Math.min(canvas.width, canvas.height) / 2;

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // draw lines for the outer pattern
  for (let i = 0; i < 30; i++) {
    let angle = (i / 30) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - radius2);
    let y1 = Math.sin(angle) * (canvas.height / 2 - radius2);
    let x2 = Math.cos(angle) * (600);
    let y2 = Math.sin(angle) * (600);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.stroke();
  }



  for (let i = 0; i < 30; i++) {
    let angle = (i / 30) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - radius);
    let y1 = Math.sin(angle) * (canvas.height / 2 - radius);
    let x2 = Math.cos(angle) * (radius);
    let y2 = Math.sin(angle) * (radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.stroke();
  }

  // increase radius
    radius += 0.5;
  
  radius2+=0.5;
  if(radius2 > maxRadius-10){
    radius2 = -300
  }

  // reset radius if it's greater than maxRadius
  if (radius > maxRadius) {
    radius = 0;
  }
}

animate();
