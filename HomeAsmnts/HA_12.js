    'use strict';
    function fibonacci (n) {
        if (n==0) return 0;
        if (n==1) return 1;
        let result = fibonacci(n-1) + fibonacci(n-2);
        return result;    

    }
console.log(fibonacci(10));