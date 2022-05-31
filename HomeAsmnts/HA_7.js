'use  strict';
        
    let simpleRectangle = {
        width: 7,
        height: 9,
    }

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
        y: 1
    }

// 1. Using simpleRectangle
    function isInRectangleSimple(simpleRect, p) {
        return ((p.x < simpleRect.width / 2) && (p.x >  - simpleRect.width  / 2) &&  (p.y < simpleRect.height / 2)  && (p.y > - simpleRect.height / 2));

    } // bool: true or false

    // 2. Using rectangle
    function isInRectangle(rect, p) {
        return  ((p.x<(rect.x+rect.width/2)) &&
                (p.x>(rect.x-rect.width/2)) &&
                (p.y<(rect.y+rect.height/2)) &&
                (p.y>(rect.y-rect.height/2)));
    } // bool: true or false

    // 3. Using [rectangle, rectangle2, ... ]
    function isInManyRectangles(rectangles, p) {
        let result = true;
        for (let  i=0; i < rectangles.length; i+=1) {
            for (; result == true; ) { 
                if ((p.x<rectangles[i].x+rectangles[i].width/2)&&(p.x>rectangles[i].x-rectangles[i].width/2)&&
                (p.y<rectangles[i].y+rectangles[i].height/2)&&(p.y>rectangles[i].y-rectangles[i].height/2)) {
                    result = true;
                } else result = false;
            }
        }
        return result;
    }

        // return  ((p.x<rectangles[0].width/2)&&
        //         (p.x<rectangle3[1].x+rectangles[1].width/2)&&
        //         (p.x<rectangles[2].x+rectangles[2].width/2)&&
        //         (p.x>-rectangles[0].width/2)&&
        //         (p.x>rectangle3[1].x-rectangles[1].width/2)&&
        //         (p.x>rectangles[2].x-rectangles[2].width/2)&&
        //         (p.y<rectangles[0].height/2)&&
        //         (p.y<rectangles[1].y+rectangles[1].height/2)&&
        //         (p.y<rectangles[2].y+rectangles[2].height/2)&&
        //         (p.y>-rectangles[0].height/2)&&
        //         (p.y>rectangles[1].y-rectangles[1].height/2)&&
        //         (p.y>rectangles[2].y-rectangles[2].height/2));
    // bool: true or false

    // 4. isInAnyRectangle
    function isInAnyRectangle(rectangles, p) {
        let result = false;
        for (let i = 0; i < rectangles.length; i += 1) {
              if ((p.x < rectangles[i].x + rectangles[i].width / 2) && (p.x > rectangles[i].x - rectangles[i].width / 2) &&
                (p.y < rectangles[i].y + rectangles[i].height / 2) && (p.y > rectangles[i].y - rectangles[i].height / 2)) {
                result = true;
                } 
        }
        return result;
    }

    console.log(isInRectangleSimple(simpleRectangle, point))
    console.log(isInRectangle(rectangle, point))
    console.log(isInManyRectangles([rectangle, rectangle2, rectangle3], point))
    console.log(isInAnyRectangle([rectangle, rectangle2, rectangle3], point))

    // 4. PointInOneRectangle
    function PointInOneRectangle(rectangles, p) {
        let result = false;
            for (let i = 0; i < rectangles.length; i += 1) {
                for (let j=0; j < p.length; j+=1) {
                    if ((p[j].x < rectangles[i].x + rectangles[i].width / 2) && (p[j].x > rectangles[i].x - rectangles[i].width / 2) &&
                       (p[j].y < rectangles[i].y + rectangles[i].height / 2) && (p[j].y > rectangles[i].y - rectangles[i].height / 2)) {
                    result = true;
                    } 
                }
        }
    return result;
    }
    console.log(PointInOneRectangle([rectangle, rectangle2, rectangle3], [point, point1, point2]))
    // 5. AllPointsInOneRectangle
    function AllPointsInOneRectangle(rectangles, p) {
        let result = false;
        for (let i = 0; i < rectangles.length; i += 1) {
            let pcalc = 0;
            for (let j = 0; j < p.length; j += 1) {
                if ((p[j].x < rectangles[i].x + rectangles[i].width / 2) && (p[j].x > rectangles[i].x - rectangles[i].width / 2) &&
                    (p[j].y < rectangles[i].y + rectangles[i].height / 2) && (p[j].y > rectangles[i].y - rectangles[i].height / 2)) {
                    pcalc +=1;
                }
                if (pcalc == p.length) {
                result = true;
                }
            }
        }
        return result;
    }
    console.log(AllPointsInOneRectangle([rectangle, rectangle2, rectangle3], [point, point1, point2]))
    //6. EveryPointInSomeRectangle
    function EveryPointInSomeRectangle(rectangles, p) {
            let result = false;
            for (let j = 0; j < p.length; j += 1) {
                let  calc = 0;
                for (let i = 0; i < rectangles.length; i += 1) {
                    if ((p[j].x < rectangles[i].x + rectangles[i].width / 2) && (p[j].x > rectangles[i].x - rectangles[i].width / 2) &&
                        (p[j].y < rectangles[i].y + rectangles[i].height / 2) && (p[j].y > rectangles[i].y - rectangles[i].height / 2)) {
                    calc+=1;    
                    }
                }
                if (calc == p.length) {
                    result = true;
                }
            }
        return result;
    }
        console.log(EveryPointInSomeRectangle([rectangle, rectangle2, rectangle3], [point, point1, point2]))

    //  let p1 = {x: 2, y: 7};
    //  let p2 = {x: 5, y: -3};
    
    //  function  distance (p1, p2)  {
    //      let dis = Math.sqrt(((p2.x - p1.x)*(p2.x - p1.x)) + ((p2.y-p1.y)*(p2.y - p1.y)));
    //      return dis;
    //  }

    //  console.log(distance(p1, p2));
 