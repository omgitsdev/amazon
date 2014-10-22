app.factory('Cart', [function(){
  contents = {};
  return {
    contents: contents,
    addItem: function(item) {
      if (contents[item.id]) {
        contents[item.id].count++
      } else {
        contents[item.id] = {
          item: item,
          count: 1
        };
      }
    },
    cartCost: function() {
      cost = 0;
      for (item in contents) {
        cost = contents[item].count * contents[item].item.price;
        contents[item].item.$update();
      }
      return cost;
    }
  }
}]);


// QUESTION: How does $update work here? Is the $update command tied to each item object?
