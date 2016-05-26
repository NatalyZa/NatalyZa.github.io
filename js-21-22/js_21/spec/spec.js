var pow = require('../script.js');

describe("Function pow", function() {
  it("check exponentiation", function() {
  	var result;
  	result = pow(2,4);
    expect(result).toBe(16);
  });

   it("check if the degree is equal to zero", function() {  	 
  	result = pow(3,0);
    expect(result).toBe(1);
  });

   it("check if the degree of negative", function() {  	
  	result = pow(2,-4);
    expect(result).toBe(0.0625);
  });

});