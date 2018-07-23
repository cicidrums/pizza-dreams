//Business Logic
//Set up Constructor
function Pizza(size, toppingCost) {
  this.size = size;
  this.toppingCost = toppingCost;
  this.price = 0;
}

//Set up Prototype
Pizza.prototype.info = function() {
  if (this.size === "15" && this.toppingCost === "0") {
    this.price = 15;
  } else if (this.size === "20" && this.toppingCost === "0") {
    this.price = 20;
  } else if (this.size === "15" && this.toppingCost ==! "2") {
    this.price = this.price + 16;
  } else if (this.size === "20" && this.toppingCost ==! "2") {
    this.price = this.price + 22;
  } else {
    this.price = this.price + 24;
  }
  };

//UI Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $("#pizza-size option:selected").each(function() {
      var size = $(this).val();
    });
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingCost = $(this).val();
    });

    var size = $("#pizza-size option:selected").val();
    var toppings = [];
    var toppingCost = parseInt($("input:checkbox[name=toppings]:checked").each(function() {
    toppings.push($(this).val());
    console.log(toppingCost);
    var total = parseInt(size) + parseFloat(toppings);
    var newPizza = new Pizza(size, toppingCost);



    $("#result").text(newPizza.info());
    $("#result").text("$" + total + ".00");
    $("#result").show();
  }));
  });
});
