export const operar = (valorPrevio: string, operador: string, valorActual: string): string => {
  const num1 = parseFloat(valorPrevio);
  const num2 = parseFloat(valorActual);

  switch (operador) {
    case "+": return (num1 + num2).toString();
    case "-": return (num1 - num2).toString();
    case "x": return (num1 * num2).toString();
    case "/": return num2 !== 0 ? (num1 / num2).toString() : "Error";
    case "%": return (num1 % num2).toString();
    default: return "";
  }
};

