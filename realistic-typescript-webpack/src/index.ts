// Magic for p5 importing properly in TypeScript AND Webpack
import 'p5'; var p5 = require("p5");

import './assets/styles/main.scss'

const sketch: p5 = new p5(() => { })

sketch.setup = () => {
  // We have to ignore the casting cause p5 definitions are once again not
  // helping us here. Further more, Chrome Dev Tools claims canvas is a
  // p5.Renderer2D, yet p5 definitions do not expose such type. So i had to
  // guess and use p5.Renderer, i am unsure how safe it is...
  // @ts-ignore
  let canvas: p5.Renderer = sketch.createCanvas(400, 400)
  canvas.parent('content')
  sketch.background(125);
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
