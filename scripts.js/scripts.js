var username = "user"; //valores reales.
var pass = "321";
var usuario, contraseña; //para pedir valores
var condicion;//variable booleana.

do {

usuario= prompt("Ingrese su usuario");
contraseña = prompt ("Ingrese su contraseña");

  if (username!=usuario || pass!=contraseña) //p/validar que coincidan
  {
   alert ("usuario o contraseña incorrecta");
   condicion=true;
  } else {
   condicion=false;
   alert ("Iniciando sesion")
}

} while (condicional == true);

