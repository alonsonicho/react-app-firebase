export const formatDate = () => {
  const fechaActual = new Date(Date.now());
  const dia = fechaActual.getDate().toString().padStart(2, "0");
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
  const anio = fechaActual.getFullYear().toString().slice(-2);
  const fechaFormateada = `${dia}-${mes}-${anio}`;
  return fechaFormateada;
};
