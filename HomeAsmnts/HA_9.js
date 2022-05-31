
// задание на уроке  Фабрика точек, для которых проверяется 

'use  strict';

    let rectangle = {
        x: -3,
        y: -2,
        width: 5,
        height: 2
    }

    function  makePoint (x, y) {
        let p = {x: x, y: y};
        p.isInRectangle =  function (rect) {
            return (this.x > rect.x - rect.width / 2) && (this.x < rect.x + rect.width / 2)
            && (this.y > rect.y - rect.height / 2) && (this.y < rect.y + rect.height / 2);
        }
    }
        let p1 =makePoint (2,4);
        let p2 =makePoint (4,6);
 
//  -----Домашнее задание - Фабрика прямоугольников, для которых работает  проверка, попадает ли  в  них точка

    let p = {
        x: 5,
        y: 3
    }

    function  makeRectangle (x, y, width, height) {
        let rectangle = {x: x, y: y, width: width, height: height};
            rectangle.isInRectangle = function (p) {
                    
                const halfWidth = this.width/2;
                const halfHeight= this.height/2;

            return (p.x > this.x - halfWidth) && (p.x < this.x + halfWidth)
            && (p.y > this.y - halfHeight) && (p.y < this.y + halfHeight);
        }
            return rectangle;
    }

            let  rectangle1 = makeRectangle(5, 3, 3, 6);
            let  rectangle2 = makeRectangle(-2, -1, 1, 8);
   
        console.log(rectangle1);
        console.log(rectangle1.isInRectangle(p));
        console.log(rectangle2.isInRectangle(p));


//---------Дополнительное задание  - создать фабрику  для людей
    
        function  makePerson (name, surname, year) {
            let person = {name: name, surname: surname, year: year};
                
            person.fullName = function () {
                return (this.name + " " + this.surname);    
                }
            
            person.age = function () {
                return (2022 - this.year);
            }
            return person;
        }

        let  person1 = makePerson("John", "Peterson", 1989);
        let  person2 = makePerson("Peter", "Johnson", 2000);
   
        console.log(person1);
        console.log(person2);

        console.log(person1.fullName());
        console.log(person2.fullName());
        console.log(person1.age());   
        console.log(person2.age()); 

