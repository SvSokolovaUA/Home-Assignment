'use strict'
    
//  ----- homework 1  sum  of Even

        let b = [];
        let j = 8;
        while (j > 0) {
            let elem = Number(prompt("Input next element:"));
            b.push(elem);
            j = j - 1;
        }

        function sumEven(sum) {
            let s=0;
            for (let i=0; i < (sum.length); i+=1) {
                if (sum[i]%2==0) {
                s = s + sum[i];
                }
            }
            return s;
        } 
        console.log(sumEven(b));


// ----- homework  2 Average Of Odd
        let b = [];
        let j = 8;
        while (j > 0) {
            let elem = Number(prompt("Input next element:"));
            b.push(elem);
            j = j - 1;
        }

        function AverageOfOdd(sum) {
            let s=0;
            let k=0;
            let a;
            for (let i=0; i < (sum.length); i+=1) {
                if (sum[i]%2==1) {
                s = s + sum[i];
                k+=1;
                }
            }
        if (k>0) {
            a=s/k;

        }    
        return a;
        } 
        console.log(AverageOfOdd(b));
        
// ----- homework 3 amount of words 
        
        let phrase = prompt("Input some phrase");

        function Words(w) {
            let i = 1;
            for (let j = w.length; j > 0; j-=1) {
                if (w[j]==" ") {
                    i+=1;
                }
            }    
        return i;
        } 
        console.log(Words(phrase));

 // ---- homework 4  Long words
 
        let phrase = prompt("Input some phrase");
        function LongWords(w) {
            let lw= 0;
            let firstI = 0;
            for (let j = 0; j <  w.length; j+=1) {
                if (w[j] == " ") {
                    if  ((j-firstI) > 3) {
                        lw += 1;
                    }
                    firstI = j+1;
                }
            }   
            if (lw>0) {
                lw=lw+1;
            }
        return lw;
        } 
        console.log(LongWords(phrase));
