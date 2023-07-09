"use strict";

{
    function showPassword() {
        const result = document.getElementById("result");
        const checkboxNumbers = document.getElementById("checkboxNumbers");
        const checkboxSymbols = document.getElementById("checkboxSymbols");
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!$%&?§#()";
        let password = "";
        let seed = letters + letters.toUpperCase();
        
        if (checkboxNumbers.checked) {
          seed += numbers;
        }
        
        if (checkboxSymbols.checked) {
          seed += symbols;
        }
        
        for (let i = 0; i < slider.value; i++) {
          password += seed[Math.floor(Math.random() * seed.length)];
        }
        
        result.textContent = password;
        
}

  const slider = document.getElementById("slider");
  const btn = document.getElementById("btn");

  slider.addEventListener("input", () => {
    const passwordLength = document.getElementById("passwordLength");

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener("click", () => {
    showPassword();
  });

  showPassword();
}
