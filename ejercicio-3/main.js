function calculate() {
  // Obtener los valores de los inputs y del select
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;

  var result;

  // Realizar la operación seleccionada
  switch (operation) {
    case "sum":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
    default:
      result = "Error";
  }

  // Mostrar el resultado en la etiqueta <p>
  document.getElementById("result").textContent = "Resultado: " + result;
}
