// Muestra la sección seleccionada y oculta las demás
function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Realiza los cálculos según la operación seleccionada
function calcular(operacion) {
  const num1 = parseFloat(document.getElementById(`num1-${operacion}`).value);
  const num2 = parseFloat(document.getElementById(`num2-${operacion}`).value);
  let resultado;

  // Validación de entradas
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById(`resultado-${operacion}`).textContent = "Por favor, ingrese números válidos.";
    return;
  }

  // Realización de la operación según el tipo
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        resultado = "No se puede dividir por 0.";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = "Operación no válida";
  }

  // Mostramos el resultado
  document.getElementById(`resultado-${operacion}`).textContent = `Resultado: ${resultado}`;
}
