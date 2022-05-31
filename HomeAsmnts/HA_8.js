//-------- work on lesson
'use  strict';
    let rectangle = {
    x: -3,
    y: -2,
    width: 5,
    height: 2,
        isInRectangle: function (p) {
            return (p.x > this.x - this.width/2) && (p.x < this.x + this.width/2)
            && (p.y > this.y - this.height/2) && (p.y < this.y + this.height/2);
        }
    }
        
    let point = {
        x: 3,
        y: 8
    }
    console.log(rectangle.isInRectangle(point));
 

//----- homework
 
        let rectangle = {
        x: -3,
        y: -2,
        width: 5,
        height: 2
        }

        let point = {
        x: 3,
        y: 8,
        isInRectangle: function(rect) {
            return (this.x > rect.x - rect.width / 2) && (this.x < rect.x + rect.width / 2)
                && (this.y > rect.y - rect.height / 2) && (this.y < rect.y + rect.height / 2);
        }
        }
        console.log(point.isInRectangle(rectangle));
     
// ----- distance between points --------------------

        let rectangle = {
        x: -3,
        y: -2,
        width: 5,
        height: 2
        }

        let point = {
        x: 3,
        y: 8,
        isInRectangle: function(rect) {
            return (this.x > rect.x - rect.width / 2) && (this.x < rect.x + rect.width / 2)
                && (this.y > rect.y - rect.height / 2) && (this.y < rect.y + rect.height / 2);
        },
        distance: function(p) {
            let dis = Math.sqrt(((this.x - p.x) * (this.x - p.x)) + ((this.y - p.y) * (this.y - p.y)));
            return dis;
        }
        }

        let point2 = {
            x: 5,
            y: -1
        }

// 2. Using rectangle
            function isInRectangle(r, p) {
            let halfWidth = r.width / 2;
            let halfHeight = r.height / 2;
            return (p.x > r.x - halfWidth) && (p.x < r.x + halfWidth)
            && (p.y > r.y - halfHeight) && (p.y < r.y + halfHeight);
            } // bool: true or false

        console.log(point.isInRectangle(rectangle));
        console.log(point.distance(point2));


    let rectangle = {
        x: 0,
        y: 4,
        width: 7,
        height: 9,
    }

    let rectangle2 = {
        x: 5,
        y: 7,
        width: 2,
        height: 4,
    }

    let rectangle3 = {
        x: -3,
        y: -2,
        width: 5,
        height: 2,
    }

    let point = {
        x: 0,
        y: 4
    }

    let point1  = {
        x: 5,
        y: 7
    }

    let point2 = {
        x: -3,
        y: -2
    }

//6. EveryPointInSomeRectangle Каждая из  точек принадлежит какому-то прямоугольнику
    function EveryPointInSomeRectangle(rectangles, p) {
        let result = true;
        let pointInRect = 0;

        for (let j = 0; j < p.length; j += 1) {
            for (let i = 0; i < rectangles.length; i += 1) {
                if ((p[j].x < rectangles[i].x + rectangles[i].width / 2) && (p[j].x > rectangles[i].x - rectangles[i].width / 2) &&
                    (p[j].y < rectangles[i].y + rectangles[i].height / 2) && (p[j].y > rectangles[i].y - rectangles[i].height / 2)) {
                    pointInRect += 1;
                } 
            }
            if (pointInRect == 0)  {
                result =  false;
            }
            pointInRect = 0;
        }
            return result;
    }
    console.log(EveryPointInSomeRectangle([rectangle, rectangle2, rectangle3], [point, point1, point2]))
