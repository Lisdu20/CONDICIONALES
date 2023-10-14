let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let tipoDeFruta = "sandia";
let precio;

switch (tipoDeFruta) {
  case "sandia":
  case "kiwi":
    precio = 34;
    break;
  case "fresa":
    precio = 45;
    break;
  default:
    precio = 0;
}

console.log(`El precio de la ${tipoDeFruta} es ${precio} pesos mexicanos.`);