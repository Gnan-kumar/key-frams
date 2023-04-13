function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // Expected output: "NOT positive"
  const expr = 'Papayas';
  switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
  
  function checkValue(a, b) {
    if (a === 1)
      if (b === 2)
        console.log("a is 1 and b is 2");
      else
        console.log("a is not 1");
  }