describe('Pizza', function() {
  it("returns the pizza's size", function() {
    var testPizza = new Pizza(10);
    expect(testPizza.size).to.equal(10);
  });
  it("adds toppings to a pizza", function(){
    var testPizza = new Pizza(10);
    testPizza.addTopping('Pepperoni');
    testPizza.addTopping('Roasted Red Peppers');
    expect(testPizza.toppings).to.eql(['Pepperoni', 'Roasted Red Peppers'])
  })
  it("removes toppings from a pizza", function(){
    var testPizza = new Pizza(10);
    testPizza.addTopping('Pepperoni');
    testPizza.addTopping('Roasted Red Peppers');
    testPizza.removeTopping('Roasted Red Peppers')
    expect(testPizza.toppings).to.eql(['Pepperoni'])
  })
});

describe('Order', function(){
  it('returns the pizzas in an order', function(){
    var testOrder = new Order;
    var testPizza = new Pizza(10);
    testOrder.addPizza(testPizza);
    expect(testOrder.pizzas).to.eql([testPizza]);
  })
  it('can remove a pizza from an order', function(){
    var testOrder = new Order;
    var testPizza = new Pizza(10);
    testOrder.addPizza(testPizza);
    testOrder.removePizza(testPizza)
    expect(testOrder.pizzas).to.eql([]);
  })
  it('can calculate the total cost', function(){
    var testOrder = new Order;
    var testPizza = new Pizza(10);
    testOrder.addPizza(testPizza);
    testOrder.calculateTotal();
    expect(testOrder.total).to.equal(10);
  })
  it('can calculate a more complex total cost', function(){
    var testOrder = new Order;
    var testPizza = new Pizza(10);
    testPizza.addTopping('Pepperoni');
    testPizza.addTopping('Roasted Red Peppers');
    var testPizza2 = new Pizza(12);
    testPizza2.addTopping('Feta Cheese');
    testOrder.addPizza(testPizza);
    testOrder.addPizza(testPizza2);
    testOrder.calculateTotal();
    expect(testOrder.total).to.equal(26.5);
  })
})
