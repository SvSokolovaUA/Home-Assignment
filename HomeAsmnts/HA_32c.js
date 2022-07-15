'use strict'

class Person {
    maritalStatus = 'single';
  
    constructor(firstName, lastName, birthYear = 2000) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  
    setBirthYear(newYear) {
      this.birthYear = newYear;
    }
  
    get age() {
        return (new Date()).getFullYear() - this.birthYear;
    }
  
    set age(value) {
        this.birthYear = (new Date()).getFullYear - value;
    }
  
    divorce(other) {
        if (this.maritalStatus.endsWith(other.getFullName())) {
            this.maritalStatus = `${"divorced with"} ${other.getFullName()}`;
        } 
        return this.maritalStatus;
    } 
      // if single -> single
      // if wrong name -> do nothing
      // if correct name -> 'divorced with {full name}'
  
    marry(other) {
       if (!this.maritalStatus.startsWith("married")) {
          this.maritalStatus = `${"married to"} ${other.getFullName(other)}`;
       }
       return this.maritalStatus;
    } 
    // if married -> do nothing
    // marritalStatus -> 'married to {full name}'
  }
  
  let john = new Person("john", 'peterson');
  console.log(john.setBirthYear(1998));
  console.log(john);
  console.log(john.getFullName());
  
  let peter = new Person("Peter", "Jackson", 1991);
//   peter.maritalStatus = "married"
  console.log(peter)
  console.log(peter.age)
  
  let p = new Person("Ann", "Frank");
  
  john.marry(p);
  console.log(john.maritalStatus); // 'married to Anna Frank'
  
  let p2 = new Person("Clara", "Zetkin");
  
  peter.marry(p2); 
  console.log(peter.maritalStatus) // 'married to Clara Zetkin'
  peter.divorce(p); 
  console.log(peter.maritalStatus) // 'married to Clara Zetkin'
  peter.divorce(p2); 
  console.log(peter.maritalStatus) // 'divorced with Clara Zetkin'
  
  // H.A. #3 Using TDD add required functionality to class