'use strict';
// Деструктуризующее присваивание
// 1.

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;


alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// 2.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries) {


    let highestSalary = null;
    let nameBestpaid;

    for (let [name, salary] of Object.entries(salaries)) {
        
        if (salary > highestSalary) {

            highestSalary = salary;
            nameBestpaid = name;
        } 

    }

    if (nameBestpaid === undefined)
        {
            return highestSalary;
    }   else { return nameBestpaid;}
}

console.log(topSalary(salaries));

