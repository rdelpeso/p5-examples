// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5'; var p5 = require("p5");


const sketch: p5 = new p5(() => { })

sketch.setup = () => {
  sketch.createCanvas(400, 400)
  sketch.background(50);
  // sketch.stroke(0) no longer works due to how p5 typescript definitions work.
  sketch.stroke(0, 0, 0)
}

sketch.draw = () => {
  // sketch.fill(0) no longer works due to how p5 typescript definitions work.
  sketch.fill(0, 0, 0)
  if (sketch.mouseIsPressed) {
    // sketch.fill(255) no longer works due to how p5 typescript definitions work.
    sketch.fill(255, 255, 255)
  }
  sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20)
}
