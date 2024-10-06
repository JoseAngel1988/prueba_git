let nombre1 = "Jose Angel";
let contraseña1 = 123456;

while (true) {
  let nombre = prompt("Por favor ingrese un nombre");

  let contraseña = prompt("Por favor ingrese un nombre");

  if (nombre1 == nombre) {
    alert(`Eres tu ${nombre}`);
  } else if (contraseña == contraseña1) {
    alert(`Es tu contraseña.`);
  }
  break;
}
