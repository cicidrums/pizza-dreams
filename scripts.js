//Business Logic
function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.info = function() {
  return this.pizzaSize + this.pizzaToppings;
}
var pizzaCost = [];

//UI Logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    $(size).each(function(){
      var sizeCost = $(this).val();
      result.push(sizeCost);
    }



var size = parseInt($("#size option:selected").val());
console.log(size);
var toppings = parseInt($("input[name=toppings]:checked").val());
console.log(toppings);

//  var userResponses = [];
  $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
    });
    /*$("#cost").show();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var size = $(this).val();
      $('#cost').append(size);
    });
    $('#pizza').hide();
    }

    var size = parseInt($("#size option:selected").val());
    var toppings = parseInt($("input[name=toppings]:checked").val());

    var total = (size + toppings);
    var newPizza = new Pizza(size, toppings);

    $("span#cost").text(newPizza.info());
    $("h3#total").text(" " + ".00");*/
  });





  }
}
