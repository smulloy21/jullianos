var availableToppings = ['Italian Sausage', 'Pepperoni', 'Capicola Ham', 'Bacon',
                        'Chicken', 'Roasted Red Peppers', 'Meatballs',
                        'Red and White Onions', 'Carmelized Onions',
                        'Fresh Spinach', 'Black Olives', 'Roasted Mushrooms',
                        'Sweet Peppers', 'Feta Cheese', 'Roma Tomatoes', 'Anchovies',
                        'Green Peppers', 'Artichoke Hearts', 'Basil', 'Ricotta Cheese'];

function Pizza (size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function (topping) {
  if (availableToppings.indexOf(topping) !== -1) {
    this.toppings.push(topping);
  }
}

Pizza.prototype.removeTopping = function (topping) {
  var index = this.toppings.indexOf(topping);
  if (index !== -1) {
    this.toppings.splice(index, 1);
  }
}

function Order () {
  this.pizzas = [];
  this.total = 0;
}

Order.prototype.addPizza = function (pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.removePizza = function (pizza) {
  var index = this.pizzas.indexOf(pizza);
  if (index !== -1) {
    this.pizzas.splice(index, 1);
  }
}

Order.prototype.calculateTotal = function () {
  var total = 0;
  for(var i = 0; i < this.pizzas.length; i++) {
    total += this.pizzas[i].size;
    total += (this.pizzas[i].toppings.length) * (1.5);
  }
  this.total = total;
}


$(document).ready(function(){
  var newOrder = new Order;
  $('.pizza').click(function(event){
    $(this).addClass("selected");
    var newPizza = new Pizza(parseInt(event.target.id))
    newOrder.addPizza(newPizza);
    newOrder.calculateTotal()
    $('#pizzas').append('<li>' + newPizza.size + '\" Pizza: </li>');
    $('#total').text(newOrder.total);
    $('#order').show();
    $('#extra').show();
    $('.topping').click(function(event){
      $(this).addClass("selected");
      var newTopping = event.target.id;
      newPizza.addTopping(newTopping);
      $('#pizzas').last().text(newPizza.size + '\" Pizza: ' + newPizza.toppings.join(', '));
      newOrder.calculateTotal();
      $('#total').text(newOrder.total);
      console.log(newOrder.pizzas);
    })
  })
});
