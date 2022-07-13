'use strict'
 // H.A. # 2
  
 const prices = {
    milk: 1.2,
    eggs: 1.5,
    "white bread": 1.3,
    "sour cream": 2.5,
    "beer": 1.15,
    cheese: 2.5,
  }
  
  const clients = [
    {
      name: "alex",
      goods: ["milk", "milk", "sour cream"],
    }, {
      name: "bob",
      goods: ["white bread", "eggs", "sour cream", "beer", "cheese"],
    }, {
      name: "clara",
      goods: ["white bread", "sour cream"]
    }, {
      name: "diana",
      goods: ["milk"]
    }, {
      name: "eve",
      goods: ["beer", "beer", "cheese", "beer", "eggs", "sour cream"],
    }, {
      name: "frank",
      goods: ["eggs", "cheese", "white bread", "milk"],
    },
  ]
  
  // Используя датасет с H.A. 31
  // 1. Сортированный список клиентов с информацией об общей стоимости корзины для каждого, 
  // сортировка по стоимости корзины, в убывающем порядке
  

const clientsBasket = clients.map(c => 
    ({name: c, 
    basketCost: c.goods.reduce((prev, cur) => prices[prev] + prices[cur], 0)}));

 
    console.log(clientsBasket);


  // 2. Сортированный список только тех клиентов, стоимость корины у которых превосходит 3 евро, 
  // с информацией об общей стоимости корзины для каждого, сортировка по стоимости корзины, 
  // в убывающем порядке


  // 3. Сортированный список только тех клиентов, стоимость корины у которых превосходит 3 евро, 
  // с информацией об общей стоимости корзины для каждого, сортировка по самой дорогой покупке, 
  // в убывающем порядке