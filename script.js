function addNumber(num) {
    return function(x) {
      return x + num;
    }
  }
  
  const addFive = addNumber(5);
  console.log(addFive(10)); 
  console.log(addFive(15)); 
  