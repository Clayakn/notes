
function basicRecursion(max, current){
    // Base Case for when recursion needs to stop 
    if (current > max) return; 
  
    console.log('current', current);
  
    basicRecursion(max, current + 1);
  }
  
  basicRecursion(5,1)
  
  // fibonacci is recursively defined
  // next number is sum of previous two numbers
  function fibonacci(n){
    if(n <= 2) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  console.log('fibonacci',fibonacci(6))
  // Problem? Adding number set number of times to get result
  // Example n = 20, answer = 6765, 1 was added 6765 times 
  
  
  // Factorial 
  function factorial(n){
    if (n < 2) return 1;
    return n * factorial(n-1)
  }
  
  console.log('factorial',factorial(5))