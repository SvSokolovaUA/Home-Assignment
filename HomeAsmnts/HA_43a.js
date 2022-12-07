'use strict';
// Классы
// 1. переписать функцию в класс

class Clock  {
      
    constructor (template) {
        this.timeStr = template.template    
    }

    render() {
        let date = new Date();
  
        let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
  
        let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
  
      let output = this.timeStr 
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

//  2. Исправить ошибку наследования

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.name = name;
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  alert(rabbit.name);

  // 3. Расширить класс  Clock

  class ExtendedClock extends Clock {
    constructor (template, precision) {
        super(template);
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
      };

  }

      let lowResolutionClock = new ExtendedClock({
      template: 'h:m:s',
      precision: 10000
    });

    lowResolutionClock.start();

    // 4. Исправить, чтобы код работал

    class Rabbit extends Object {
        constructor(name) {
          super();
          this.name = name;
        }
      }
      
      let rabbit = new Rabbit("Кроль");
      
      alert( rabbit.hasOwnProperty('name') ); // Ошибка
