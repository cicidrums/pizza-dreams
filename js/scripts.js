//Business Logic
//Set up Constructor
function Pizza(size, toppingCost) {
  this.size = size;
  this.toppingCost = toppingCost;
}

//Set up Prototype
Pizza.prototype.info = function() {
  return "One " + this.size + " inch pie with " + this.toppingCost + " topping";
}

var pizzaTruth = [];

//UI Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#pizza-size option:selected").each(function() {
      var size = $(this).val();
    });
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingCost = $(this).val();
      pizzaTruth.push(toppingCost);
      console.log(pizzaTruth)
    });

    var size = $("#pizza-size option:selected").val();
    //console.log(size);
    var toppingCost = parseInt($("input:checkbox[name='toppings']:checked").val());
    //console.log(toppingCost);

    var total = parseFloat(size) + parseFloat(pizzaTruth);
    var newPizza = new Pizza(size, toppingCost);

    $("#result").text(newPizza.info());
    //console.log(newPizza);
    $("#result").text("$" + total + ".00");
    $("#result").show();
    //$("#result").empty();
  });
    });
