import * as p5 from 'p5'

const sketch = new p5(() => { })

sketch.setup = () => {
  sketch.createCanvas(400, 400)
  sketch.background(50);
  sketch.stroke(0)
}

sketch.draw = () => {
  sketch.fill(0)
  if (sketch.mouseIsPressed) {
    sketch.fill(255)
  }
  sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20)
}
