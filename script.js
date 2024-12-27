const isPowerOfTwo = (n) => {
  //your code here
  if(n<=0) {
	  return false;
  }

  while(n !== 1) {
	  if(n%2 !== 0) {
		  return false;
	  }
	  n = n/2;
  }
	
  return true;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
