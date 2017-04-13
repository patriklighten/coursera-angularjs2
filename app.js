(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToByController', ToByController)
.controller('AlreadyByController', AlreadyByController)
.service('ShoppingListService', ShoppingListService);


ToByController.$inject = ['ShoppingListService'];
function ToByController(ShoppingListService) {

  var tobuylist = this;
  tobuylist.items=ShoppingListService.getItems();

   tobuylist.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
  console.log(tobuylist.items);
}


AlreadyByController.$inject = ['ShoppingListService'];
function AlreadyByController(ShoppingListService) {
  var boughtList = this;

  boughtList.items= ShoppingListService.getBoughtItems();

}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [ {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Walnuts Chocolates",
    quantity: "10"
  }];

   var boughtItems=[]; 

  /*service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
*/
  service.removeItem = function (itemIdex) {
    var item = {
      name: items[itemIdex].name,
      quantity: items[itemIdex].quantity
    };
    boughtItems.push(item); 
    items.splice(itemIdex, 1);

  };

  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function(){
    return boughtItems;
  }
}

})();
