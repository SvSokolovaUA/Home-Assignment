'use strict'
const person = {
    firstName: "Peter",
    lastName: "Johnson",
    birthYear: 1976,
    // getFullName: function() {
    //   let fullName = this.firstName + " " + this.lastName;
    //   return fullName;
    // },
    // getAge: function() {
    //   return (new Date()).getFullYear() - this.birthYear;
    // },
    get age() {
      return (new Date()).getFullYear() - this.birthYear;
    },

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    },

    set age(years) {
        this.birthYear = (new Date()).getFullYear - years;
    },

    set fullName (name) {
        let p = name.length;
        for (let i = 0; i < name.length; i+=1) {
            if (name[i] == " ") {
                p = i;
            } 
        }

        this.firstName = name.substr(0, p);
        this.lastName = name.substr(p+1);
    }
}
  
  
//   console.log(person);
//   console.log(person.firstName);
//   console.log(person.fullName);
// //   console.log(person.getFullName());
// //   console.log(person.getAge());
//   console.log(person.birthYear);
//   person.birthYear = 1988;
//   console.log(person.birthYear);
//   console.log(person.age); // person.age()
//   person.age = 28; // person.age(28)
//   console.log(person.age);
//   console.log(person.birthYear);

//   person.fullName = "John Jackson";

//   console.log(person.fullName); // "John Jackson"
//   console.log(person.firstName); // "John"
//   console.log(person.lastName); // "Jackson"

  let t = {
    celsius: 0,
    // fahreinheit: ,
    get fahreinheit() {
        return ((this.celsius * 1.8) + 32);
    },
    set fahreinheit(grades) {
        this.celsius = (grades - 32) / 1.8;
    }
  }

  t.celsius = 0;
  console.log(t.celsius); // 0
  console.log(t.fahreinheit); // 32

  t.fahreinheit = 100;
  console.log(t.celsius); // 37.7778
  console.log(t.fahreinheit); // 100