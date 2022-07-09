'use strict'
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
  
  // Не используя циклов создать отдельные массивы и вывести их в консоль:
  // - Сортированный список клиентов по количеству товаров, в убывающем порядке
  const clientsNew = clients;
  console.log(clientsNew.sort((a, b) => {
    if (a.goods.length>b.goods.length) {
        return -1;
    } else if (b.goods.length>a.goods.length) {
        return 1;
    } else {return 0;}}));

  // - Сортированный список клиентов по количеству товаров, в убывающем порядке только для тех, 
  // кто купил 2 или больше товаров
  console.log(clients.filter(g => g.goods.length >= 2).sort((a, b) => {
    if (a.goods.length>b.goods.length) {
        return -1;
    } else if (b.goods.length>a.goods.length) {
        return 1;
    } else {return 0;}}));

  // - Сортированный список клиентов c указанным количеством товаров по количеству товаров, 
  // в убывающем порядке только для тех, кто купил 2 или больше товаров
  console.log(clients.filter(g => g.goods.length >= 2).sort((a, b) => {
    if (a.goods.length>b.goods.length) {
        return -1;
    } else if (b.goods.length>a.goods.length) {
        return 1;
    } else {return 0;}}).map(l => ({name: l.name, listLength: l.goods.length})));