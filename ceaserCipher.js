function enDeCode() {
    // Getting User Input
    let userString = document.getElementById("inputtext").value;
    let userKey = document.getElementById("shiftKey").value;
    let mode = document.getElementById("mode").value;
  
    // Validating User Input
    let cleanString = userString.trim().toLowerCase();
    let outputMessage = [];
  
 
    for (let i = 0; i < cleanString.length; i++) {
      outputMessage.push(codeLetter(cleanString[i], userKey, mode));
    }
  
    // Displaying the Resulting 
    document.getElementById("textarea").textContent = outputMessage.join("");
  }
  
  // Encoding and Decoding
  function codeLetter(letter, userKey, mode) {
 
    let letterRegEx = /[^a-z]/;
  
   
    if (letterRegEx.test(letter)) {
      return letter;
    } else {
     
      let index = convertLetterToIndex(letter);
      let shift = parseInt(userKey);
  
      if (mode === "encode") {
        index = (index + shift) % 26; 
      } else if (mode === "decode") {
        index = (index - shift + 26) % 26;  
      }
  
      return convertIndexToLetter(index);
    }
  }
  
  function convertLetterToIndex(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.indexOf(letter);
  }
  
  function convertIndexToLetter(index) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[index];
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
  
 
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();  
      enDeCode(); 
    });
  });
  