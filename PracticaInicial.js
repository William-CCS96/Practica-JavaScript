var nombre = "William";
var alias = "Unic";
var apellido = "Correa";
var nombredeUsurarioenPlatzi = "WilliamCCS";
var edad = 25;
var correoElectronico = "w.correa@gmail.com";
var mayordeedad = "si";
var dineroAhorrado = 2500;
var deudas = 500; 

function nombrecompleto(){
    console.log(`${nombre} ${apellido}`);
    }

nombrecompleto();
//<William Correa

function dineroreal(){
    console.log(dineroAhorrado-deudas);
}
dineroreal();
//<2000


//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name+ lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); 

const miFuncion = (name, lastName, nickname) => {
	let fullName = `${name} ${lastName}`;
	return `Mi nombre es: ${fullName}, pero prefiero que me digas ${nickname}`;
}
console.log(miFuncion('Juan David', 'Castro Gallego', 'juandc'));
