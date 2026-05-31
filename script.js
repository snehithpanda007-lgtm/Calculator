let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let expression = "";
let result = "";



buttons.forEach(button => {
  button.addEventListener('click',() => {
    if(button.id == "clear"){
      expression = "";
      display.textContent = "0000"
      return;
    }
    if(button.id == "equal"){
      try {
        result = eval(expression);
        expression = result.toString();
        display.textContent = expression;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
      return;
    }
    expression += button.textContent;
    display.textContent = expression;
  })
});