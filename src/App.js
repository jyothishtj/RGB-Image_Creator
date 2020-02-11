import React from "react";
import { useEffect } from "react";
import "./App.css";
import { useRef } from "react";
import { rgbGraph } from "./Utilities/rgbGraph";
import { randInt } from "./Utilities/randInt";
export default function App() {
  let ref = useRef();
  useEffect(() => {
    let height = 128;
    let width = 256;
    let pixels = [];
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    let colors = rgbGraph();
    let  color = colors.splice(randInt(0, colors.length - 1), 1)[0];
    console.log(color);
    console.log(colors.length);
    let pixel = { getX: 128, getY: 64 };

    let pixelSelect = [];

    context.clearRect(0, 0, 254, 127);
    pixels.push(pixel);
    pixelSelect[pixel.getX + "x" + pixel.getY] = 1;
    context.fillStyle =
      "rgb(" + color.getRed + "," + color.getBlue + "," + color.getGreen + ")";
    context.fillRect(pixel.getX, pixel.getY, 1, 1);

    setInterval(() => {
      if (pixels.length > 0) {
        var modifiedPixel = pixels.splice(randInt(0, pixels.length - 1), 1)[0];

        for (
          var nx = modifiedPixel.getX - 1;
          nx < modifiedPixel.getX + 2;
          nx++
        ) {
          for (
            var ny = modifiedPixel.getY - 1;
            ny < modifiedPixel.getY + 2;
            ny++
          ) {
            if (
              !(
                pixelSelect[nx + "x" + ny] === 1 ||
                ny < 0 ||
                nx < 0 ||
                nx > width - 1 ||
                ny > height - 1 ||
                (nx === modifiedPixel.getX && ny === modifiedPixel.getY)
              )
            ) {
              var matchingColor = colors.splice(
                randInt(0, colors.length - 1),
                1
              )[0];
              var newPixel = { getX: nx, getY: ny };
              pixels.push(newPixel);
              pixelSelect[newPixel.getX + "x" + newPixel.getY] = 1;
              context.fillStyle =
                "rgb(" +
                matchingColor.getRed +
                "," +
                matchingColor.getBlue +
                "," +
                matchingColor.getGreen +
                ")";
              context.fillRect(newPixel.getX, newPixel.getY, 1, 1);
            }
          }
        }
      }
    }, 1);
  });

  return (
      <>
    <div className="main">
        <nav className="navigation">
         <ul>
            <li><a href="#">RGB Image Creation Application</a></li>
            <li><a href="#">About</a></li>
           </ul>
            </nav>
            </div>
            <div id="test">
            <canvas className="test" ref={ref} />
             </div>
    </>
  );
}
