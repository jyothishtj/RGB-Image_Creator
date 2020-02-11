
/**
* Utility function to create the array of color RGB colors 32768 colors.
* @function rgbGraph
* @returns Array colors
*/
export function rgbGraph() {
  let blue;
  let red;
  let green;
  let colors = [];
  var steps = 8;
  for (red = steps / 2; red <= 255; ) {
    for (blue = steps / 2; blue <= 255; ) {
      for (green = steps / 2; green <= 255; ) {
        colors.push({
          getRed: Math.round(red),
          getBlue: Math.round(blue),
          getGreen: Math.round(green)
        });
        green = green + steps;
      }
      blue = blue + steps;
    }
    red = red + steps;
  }

  return colors;
}
