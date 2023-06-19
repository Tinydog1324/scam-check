function checkNumber() {
    var input = document.getElementById('number-input');
    var result = document.getElementById('result');
  
    // Get the entered phone number
    var phoneNumber = input.value;
  
    // Perform a check to determine if it's a scam number
    var isScam = isPhoneNumberScam(phoneNumber);
  
    // Display the result
    if (isScam) {
      result.innerText = phoneNumber + ' is a scam number!';
    } else {
      result.innerText = phoneNumber + ' is not a scam number.';
    }
  }
  
  function isPhoneNumberScam(phoneNumber) {
    // Simulated logic to determine if the phone number is a scam
    // You can replace this with your own implementation or use an API for scam number lookup
    var scams = ['123-4567','555-1234', '123-4567', '999-9999'];
    return scams.includes(phoneNumber);
  }
  