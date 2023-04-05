function calculateFactorial() {
    const inputNumber = document.getElementById("input-number").value;
    let factorial = 1;
    
    for (let i = 2; i <= inputNumber; i++) {
      factorial *= i;
    }
    
    document.getElementById("result").textContent = `O fatorial de ${inputNumber} é ${factorial}`;
  }
  