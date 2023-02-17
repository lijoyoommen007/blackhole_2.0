const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.setLineDash([5,15]);

let radius = 0;
let maxRadius = Math.min(canvas.width, canvas.height) / 2;
console.log(canvas.width);

// Create a new Image object and set its src property
const image = new Image();
image.src = "./Group 5.svg";

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // calculate diagonal of canvas

  for (let i = 0; i < 90; i++) {
    let angle = (i /90) * Math.PI * 4;
    let x1 = Math.cos(angle) * (canvas.width  - radius+10000);
    let y1 = Math.sin(angle) * (canvas.height - radius+10000);
    let x2 = Math.cos(angle) * 200;
    let y2 = Math.sin(angle) * 200;

    // create gradient for stroke style of line
    
    context.strokeStyle = "white";

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.lineWidth = 2;
    context.stroke();
  }

  if (image.complete) {
    let imageWidth = 1800;
    let imageHeight= 1800;
    let x = (canvas.width - imageWidth) / 2;
    let y = (canvas.height - imageHeight) / 2;
    context.drawImage(image, x, y, imageWidth, imageHeight);
  }

  // increase radius
  radius += 0.5;

  // reset radius if it's greater than maxRadius

}

animate();