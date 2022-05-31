function  isOdd(num)  {
    return (num%2==1); 
     }
    console.log  (isOdd(5));

function  isEven(num) {
    return  (num%2==0);
    }
    console.log (isEven(5));

    
    let j=0;
    while (j<10) {
        console.log (j);
        j=j+1; // j+=1   equal
        // j=j-1; // equal  j-=1
    }

    for (let i=0; i<10; i+=1) {
        console.log(i);
    }

//for (; i < 10; 1 += 1) {
//       console.log(i);   
        
//  let age =  prompt ("what is your  age");
// let name = prompt ("what is your name");
// console.log (`Hello, ${name}. Your age is ${age}`);
// let  greeting = ("Hello, " + name  + ". Your age is  " +  age);   