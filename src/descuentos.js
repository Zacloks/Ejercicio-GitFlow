function calcularTotal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }
  return precio - descuento;
}

const esEstudiante = (tipo_cliente) => tipo_cliente.toLowerCase() === "estudiante";

function calcularPrecioFinal(precio, tipo_cliente) {
  return (esEstudiante(tipo_cliente) ? calcularTotal(precio, 0.15 * precio) : precio);
}

console.log(calcularPrecioFinal(10000, "estudiante"));

module.exports = { calcularTotal, calcularPrecioFinal };
