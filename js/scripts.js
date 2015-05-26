var triangleType = function(side1, side2, side3) {
  // var greatest = Math.max(side1, side2, side3)
  var sides = [side1, side2, side3]
  var numOrdA = function(a, b) {
    return (a-b);
  };

  var sortedSides = sides.sort(numOrdA);
  if (sortedSides[2] > sortedSides[0] + sortedSides[1]) {
    return false;
  } else if ((side1 === side2) && (side2 === side3)) {
    return "equilateral"
  } else if (side1 === side2 || (side2 === side3 || side1 === side3)) {
    return "isosceles"
  } else {
    return "scalene"
  };
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangleType(side1, side2, side3)
    $(".type").show()
    if (result === "equilateral") {
      $(".type").text("equilateral");
    } else if (result === "scalene") {
      $(".type").text("scalene");
    } else if (result === 'isosceles') {
      $(".type").text("isosceles");
    } else {
      $(".type").hide()
      alert("Not a Triangle. Try again");
    };
    event.preventDefault();

  });
});
