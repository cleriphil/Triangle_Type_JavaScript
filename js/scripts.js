var triangleType = function(side1, side2, side3) {
  // var greatest = Math.max(side1, side2, side3)
  var sides = [side1, side2, side3]
  var numOrdA = function(a, b) {
    return (a-b);
  };

  var sortedSides = sides.sort(numOrdA);
  if (sortedSides[2] > sortedSides[0] + sortedSides[1]) {
    return false;
  } else {
    return "equilateral"
  };
};








//
// $(document).ready(function() {
//
// });
