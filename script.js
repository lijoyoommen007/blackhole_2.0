const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
context.setLineDash([10,15]);

let radius = 20;
let maxRadius = Math.min(canvas.width, canvas.height) / 2;

// Create a new Image object and set its src property
const image = new Image();
image.src = "./Kurage_logo_BlackBg.svg";

function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);



  for (let i = 0; i < 40; i++) {
    let angle = (i / 40) * Math.PI * 2;
    let x1 = Math.cos(angle) * (canvas.width / 2 - radius-70);
    let y1 = Math.sin(angle) * (canvas.height / 2 - radius-70);
    let x2 = Math.cos(angle) * (radius);
    let y2 = Math.sin(angle) * (radius);

    context.beginPath();
    context.moveTo(canvas.width / 2 + x1, canvas.height / 2 + y1);
    context.lineTo(canvas.width / 2 + x2, canvas.height / 2 + y2);
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.stroke();
  }

  if (image.complete) {
    let imageWidth = 150;
    let imageHeight= 150;
    let x = (canvas.width - imageWidth) / 2;
    let y = (canvas.height - imageHeight) / 2;
    context.drawImage(image, x, y, imageWidth, imageHeight);
  }

  // increase radius
    radius += 0.5;
  
 
  // reset radius if it's greater than maxRadius
  if (radius > maxRadius) {
    radius = -82;
  }
}

animate();
