//Business Logic
//Set up Constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//Set up Prototype
Pizza.prototype.info = function() {
  return this.size + "with" + this.toppings;
}

//UI Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size = $("#pizza-size option:selected").val();
    console.log(size);
    var toppings = parseInt($("input[name=toppings]:checked").val());
    console.log(toppings)

    var total = (size + toppings);
    var newPizza = new Pizza(size, toppings);

    $("span#cost").val(newPizza.info());
    $(".result").append(total);

  });
});

//var results = [];
//var size = parseInt($("#pizza-size option:selected"));
//var toppings = parseInt($("input:checkbox[name=toppings]:checked"));
