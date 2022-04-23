// Responde las siguientes preguntas en la sección de comentarios:

var variable = "Es una espacio reservado paraguardar información con un id identificador";
var declararVariable ="Declarar será cuando indicamos el id de la variable pero no hemos inidicado que valor tiene";
var inicializarVariable = "Cuando indicamos el valor que tiene la varible a partir de su id";
var sumarNumeros ="Cuando se suman numeros"
var concatenarStrings ="Cuando se enlazan dos objetos tipo texto"
var operadorSumaryConcatenar ="+"

//Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

var Nombre ="William";
var Apellido ="Correa";
var NombreUsuarioPlatzi = "William Camilo";
var Edad ="26";
var CorreoElectronico ="wccorreas@gmail.com";
var MayordeEdad = true;
var Dineroahorrado = 250000;
var Deudad = "180000";

//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas

var NombreCompleto = Nombre +" "+ Apellido
var DineroReal = Dineroahorrado - Deudad;

var Funcion = "Tarea especifica con in id";
var momentoFuncion ="Cuando debo simplificar código y tareas";
var Parametors = "Espacio destinado para introducir el argumentos";
var Argumento = "Son los datos que se introduciran en el parametro y que estaran relacionadas por la tarea a realizar";

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";

const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

const name = "William Camilo";
const lastname = "Correa Sandoval";
const nickname = "Unic";

function quienEres(){
    let completeName = name + lastname;
    console.log(`Mi nombre es ${completeName}, pero prefiera que me digas ${nickname}.`)
}

//Usando  arrow function o función flecha =>

const miFuncion = (name, lastName, nickname) => {
	let fullName = `${name} ${lastName}`;
	return `Mi nombre es: ${fullName}, pero prefiero que me digas ${nickname}`;
}
console.log(miFuncion('Juan David', 'Castro Gallego', 'juandc'));

const quienEres = function(name, lastName, nickname){
    let fullName = `${name} ${lastName}`;
    return`Mi nombre es: ${fullName}, pero prefiero que me digan ${nickname}`;
}
console.log(quienEres('William', 'Correa', 'Unic'));

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    // ¿Qué es una condicional?
    //¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    //¿Puedo combinar funciones y condicionales?

    let condicional = "Es una función que valida una condición y ejecuta codigo"
    let tiposCondicionalesJSDiferencias = {
        "if.else: Validauna condición y ejecuta un codigo, sino se cumple ejecuta el else",
        "Else if: funciona como if.else adicionando más condiciones para validra entre ambos condicionales", 
        "swithc: En casos en donde haya una extensión más larga de casos por  revisar es más eficiente utilziar estacondicional",
        "Operador ternario: validamos una variables si es verdadera o falsa y nos devuelve una primera opción verdadero o la segunda si es falsa"
    }


        //if

        let compraRealizada = false;

            if(compraRealizada === true){
                let subsidioJuguete = 10;
                console.log(subsidioJuguete)
            }
            else { let subsidioJuguete = 5;
            console.log(subsidioJuguete);}

        //Else if

        let carro = "Mazda";

        function cualEsMiCarro (){
        if ("Mazda"===carro) {
            console.log(`Mi carro es un ${carro}.`);
        }         
        else if("Toyota"===carro) {
            console.log(`Mi carro es un ${carro}.`);
        }
        else{console.log(`Mi carro no es un ${carro}.`);
        }
        }           


        //switch

        let meDog ="Bulldog";

        function cualEsMiPerro() {
        switch (meDog) {
            case "Pincher":
                console.log(`Mi perro es de raza ${meDog}`);
                break;
            case "Pitbull":
                console.log(`Mi perro es de raza ${meDog}`);      
            case "Bulldog":
                console.log(`Mi perro es de raza ${meDog}`); 
                break;
            default:
                console.log(`No tengo un perro :(`);    
                break;
        }
    }
        //Operador Ternario
        let prueba =(true) ? `Es verdadera la prueba` : `Es falsa la respuesta pero verdadera la prueba`;
        console.log(prueba)
        VM665:1 Es verdadera la prueba
        
        let prueba =(false) ? `Es verdadera la prueba` : `Es falsa la respuesta pero verdadera la prueba`;
        console.log(prueba)
        VM751:1 Es falsa la respuesta pero verdadera la prueba

