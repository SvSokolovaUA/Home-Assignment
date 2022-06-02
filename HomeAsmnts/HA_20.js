function getFizzBuzz(n) {
    if (n % 3 == 0 && n % 5 != 0) {
        return "Fizz";
    } else if (n % 5 == 0 &&  n % 3 !=0) {
        return "Buzz";
    } else if (n % 5 == 0 && n % 3 == 0) {
        return "FizzBuzz";
   }
}