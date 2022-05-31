'use strict';
    
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.distance = function (p2) {
            const dx = p2.x - this.x;
            const dy = p2.y - this.y;
        return Math.sqrt = (dx*dx + dy*dy)
        }
    }
        
       let p2 = new Point ();
       console.log(p2);

   // ----------Конструктор прямоугольников -----------
    
        let p = {
            x: 5,
            y: 3
        }

        function Rectangle (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.isInRectangle = function(p) {
                const halfWidth = this.width/2;
                const halfHeight= this.height/2;
                return (p.x > this.x - halfWidth) && (p.x < this.x + halfWidth)
                && (p.y > this.y - halfHeight) && (p.y < this.y + halfHeight);
            }
        }
                    
            let  rectangle1 = new Rectangle(5, 3, 3, 6);
            let  rectangle2 = new Rectangle(-2, -1, 1, 8);
   
        console.log(rectangle1);
        console.log(rectangle1.isInRectangle(p));
        console.log(rectangle2.isInRectangle(p));

/* ------------------Неправильное решение сортировки (находит только 3 минимальных  элемента в массиве)
    <script>
        'use strict';
    
        let a = [3, 5, 1, -8, 12, 0];
        let b = [];

        function minimum(arr) {
            let min = arr[0];
            let i = 0;

            for (i=0; i < arr.length; i+=1) {
                let currentElement = arr[i];
                if (min > currentElement) {
                    min = currentElement;
                }
            }
        return min;
        } // minimum

    function sortCopy (s) {
        let c;
        
        
        for (let i=0; i < s.length; i+=1) {
            b.push (minimum(s));
            c = [];
            for (let i=0; s.length > 0 && i < s.length; i+=1) {
                    if (s[i] > minimum(s)) {
                    c.push (s[i]);
                }
            }
            s = c;
        }
    }

    console.log(sortCopy(a));
    console.log(a); // 3, 5, 1, -8, 12, 0
    console.log(b); // -8, 0, 1, 3, 5, 12    

    </script>
    */-----------------------
        
//------ Правильное решение СОРТИРОВКА МАССИВА
        let a = [3, 5, 1, -8, 12, 0];
        let b = [];

        function minimum(arr) {
            let min = arr[0];
            let i = 0;

            for (i=0; i < arr.length; i+=1) {
                let currentElement = arr[i];
                if (min > currentElement) {
                    min = currentElement;
                }
            }
        return min;
        } // minimum

    function sortCopy (s) {
        let c;

        do  {
            b.push (minimum(s));
            c = [];
            for (let i=0; i < s.length; i+=1) {
                    if (s[i] > minimum(s)) {
                    c.push (s[i]);
                }
            }
            s = c;
        } while (s.length>0);
    }

    console.log(sortCopy(a));
    console.log(a); // 3, 5, 1, -8, 12, 0
    console.log(b); // -8, 0, 1, 3, 5, 12    
