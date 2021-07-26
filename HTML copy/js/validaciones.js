function validarFormulario() {
  let formulario = document.formContacto;
  let nombres = formulario.nombres.value;
  let email = formulario.email.value;
  let asunto = formulario.asunto.value;
  if (nombres.length == 0) {
    alert("Por favor ingresar los nombres");
    return false;
  } else if (email.length == 0) {
    alert("Por favor ingresar el correo electrónico");
    return false;
  } else if (asunto.length == 0) {
    alert("Por favor ingresar el asunto");
    return false;
  } else {
    alert("¡El mensaje fue enviado con éxito!");
    return true;
  }
}
