'use strict';
        let  a =  [3, 4, 1, -1, 0];
    function filter(arr, threshold)  {
        let b = [];
        for  (let i=0; i < arr.length; i+=1) {
            if (arr[i] > threshold) {
                b.push  (arr[i]);
            }
        }
            return b;
    }  // return 
        console.log (filter(a,1));

    let p = {           //ДЗ 1 - ПРОТОТИП  ПРЯМОУГОЛЬНИК.
        x: 5,
        y: 3
    }

    function Rectangle (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
   
    Rectangle.prototype.isInRectangle = function(p) {
        const halfWidth = this.width/2;
        const halfHeight= this.height/2;
        return (p.x > this.x - halfWidth) && (p.x < this.x + halfWidth)
        && (p.y > this.y - halfHeight) && (p.y < this.y + halfHeight);
    }

        let  rectangle1 = new Rectangle(5, 3, 3, 6);
        let  rectangle2 = new Rectangle(-2, -1, 1, 8);
   
        console.log(rectangle1);
        console.log(rectangle1.isInRectangle(p));
        console.log(rectangle2.isInRectangle(p));

        // ОБЪЕКТ ПРОМОУГОЛЬНИК
        let rectangle = {               //ПРОТОТИП ДЛЯ ТОЧЕК
            x: -3,
            y: -2,
            width: 5,
            height: 2
        }
        // КОНСТРУКТОР ТОЧЕК
        function Point(x, y) {
            this.x=x;
            this.y=y;
        }
        // ПРОТОТИП ДЛЯ ТОЧЕК
        Point.prototype.isInRectangle = function (rect) {
            return (this.x > rect.x - rect.width / 2) && 
                   (this.x < rect.x + rect.width / 2) && 
                   (this.y > rect.y - rect.height / 2) && 
                   (this.y < rect.y + rect.height / 2);
        }
        //  СОЗДАНИЕ НОВЫХ ТОЧЕК - ЧЕРЕЗ "new"
        let p1 = new Point(2, 4);
        let p2 = new Point(-3, -2);

        console.log(p1.isInRectangle(rectangle));
        console.log(p2.isInRectangle(rectangle));

    let a = [3, 4, 1, -1, 0];
  
        function sort(arr) {  // СОРТИРОВКА  МАССИВА 
       
            let min=arr[0];
            let minind;

        for (let i=0; i < arr.length-1; i+=1) {
                
            for (let j = i; j < arr.length; j += 1) {
                if (min > arr[j]) {
                    min = arr[j];
                    minind=j;
                }
            }
            for (; minind>i; minind-=1){
                arr[minind]=arr[minind-1];
            }

                arr[i]=min;
                min=arr[i+1];
        }
                return arr;
            }
    

    console.log(a) // [3, 4, 1, -1, 0];
    sort(a);
    console.log(a) // [-1, 0, 1, 3, 4];
