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
    let tiposCondicionalesJSDiferencias = 
        "if.else: Validauna condición y ejecuta un codigo, sino se cumple ejecuta el else",
        "Else if: funciona como if.else adicionando más condiciones para validra entre ambos condicionales", 
        "swithc: En casos en donde haya una extensión más larga de casos por  revisar es más eficiente utilziar estacondicional",
        "Operador ternario: validamos una variables si es verdadera o falsa y nos devuelve una primera opción verdadero o la segunda si es falsa";
    
    let puedoCombinarFuncionesYCondicioneles="Si es posible se pude combinar una condicional dentro de una función"

    }

    // Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";

    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }

    const tipoDeSuscripcion = "Basic";

    function imprimirTipoDeSuscripcion() {
        if ("Free"===tipoDeSuscripcion){
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, solo puedes tomar los cursos gratis`)
        }
        else if("Basic"===tipoDeSuscripcion){
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, puedes tomar casi todos los cursos de Platzi durante un mes`)
        }
        else if("Expert"===tipoDeSuscripcion){
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, puedes tomar casi todos los cursos de Platzi durante un año`)
        }
        else{
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`)
        }   
    }
    >>Tienes una suscripción Expert, puedes tomar casi todos los cursos de Platzi durante un año

    //3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
    const tipoDeSuscripcion = "Basic";

    if (tipoDeSuscripcion) {
        if (tipoDeSuscripcion==="Free") {
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, solo puedes tomar los cursos gratis`)
        }
        if (tipoDeSuscripcion==="Basic") {
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, puedes tomar casi todos los cursos de Platzi durante un mes`)
        }
        if (tipoDeSuscripcion==="Exper") {
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, puedes tomar casi todos los cursos de Platzi durante un año`)
        }
        if (tipoDeSuscripcion==="ExpertPlus") {
            console.log(`Tienes una suscripción ${tipoDeSuscripcion}, tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`)
        }
    }

    //Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

        const tipoDeSuscripcion = "Free";

        const Suscripciones= ["Free","Basic","Expert","Expert+"];
        const Respuestas=["Solo puedes tomar los cursos gratis",
                        "Puedes tomar casi todos los cursos de Platzi durante un mes",
                        "Puedes tomar casi todos los cursos de Platzi durante un año",
                        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

        index=Suscripciones.indexOf(tipoDeSuscripcion);
        if (index==-1){
            console.error("No exisite este plan u.u");
        }
        else{
            console.log(Respuestas[index]);
        }

        
        const tipoDeSuscripcion = "Free";
        const Respuestas = {
            "Free": "Solo puedes tomar los cursos gratis",
            "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
            "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
            "Expert+": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"};

        console.log(Respuestas[tipoDeSuscripcion])

        //Ciclos   1️⃣ Responde las siguientes preguntas en la sección de comentarios:

        let ciclo= "Es una función que nos permite hacer una tarea en constante ciclo hasta que se cumpla una condicion o el total devariables";
        let tiposDeCiclosJS = {
            "for", "for of", "while", "do while"},
        let cicloInfinito = "La tarea realizada por el ciclo continua indefinidamente sin pasar a la siguiente tarea";
        let mezclarCiclosYCondicionales ="Si es posible";

       //Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
        for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
        }


        let i=0
        
        while(i>=0 && i<5){
            i++;
            console.log("El valor de i es: " + i);
        }

        
        for (let i = 10; i >= 2; i--) {
            console.log("El valor de i es: " + i);
            }

        let i=10
        while(i<=10 && i>=2){
            console.log("El valor de i es: "+i);
            i--;
        }

        //Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
        //Pista: puedes usar la función prompt de JavaScript.

        let person = prompt("Please enter your name", "Harry Potter");

        if (person != null) {
        console.log("Hello " + person + "! How are you today?");
        }
        VM458:4 Hello William Correa! How are you today?;

        let resultado= prompt("¿Cuanto es 2 + 2", "Respuesta");
        if (resultado == 4){
            console.log("Felicitaciones, respuesta correcta");
        }
        else {
            console.log("Volvamos a empezar");
            prompt("¿Cuanto es 2 + 2", "Perdiste");
        }


        
        function juego() {
            let resultado;
            do {
              resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
            } while ( resultado !== 4 );
            if (resultado === 4);
            return console.log('¡Eres un GENIO!');
          }
          juego();


          //LISTAS
          let array = "Es un onjeto que almacena datos en forma de lista y que funciona apra hacer operaciones de recorridos";
          let objeto= "En un valor que se asocia con una propiedad y una palabra clave"
          let cuandoEsMejorUsarObjetosOArrays = "Un objeto cuando se desea acceder a una propiedad de algun valor en especifico y un array cuando deseamos acceder a un obejto en especifico"
          let sePuedenMezclar = "Si se pueden combinar"

            //  2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

            var articulos =[
                {nombre: "Bici", costo: 3000 }, 
                {nombre: "Tv", costo: 2500 },
                {nombre: "Libro", costo: 322 },
                {nombre: "Celular", costo: 10000 },
                {nombre: "Laptop", costo: 20000 },
                {nombre: "Teclado", costo: 500 },
                {nombre: "Audifonos", costo: 1700 },
            ];

            function primerElemento(array) {
                console.log(array[0])
            }

            // Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

            var articulos =[
                {nombre: "Bici", costo: 3000 }, 
                {nombre: "Tv", costo: 2500 },
                {nombre: "Libro", costo: 322 },
                {nombre: "Celular", costo: 10000 },
                {nombre: "Laptop", costo: 20000 },
                {nombre: "Teclado", costo: 500 },
                {nombre: "Audifonos", costo: 1700 },
            ];

            function imprimirElementos (array){
                for(var i = 0; i<array.length; i++){
                    console.log(array[i]);
                }
            }

            // Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

            var myCar = {
                make: 'Ford',
                model: 'Mustang',
                year: 1969
            }

            for (const property in myCar) {
                console.log(`The property ${property} is equal to ${myCar[property]}.`);
                }

            


            
            



















        //Apuntes
        
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

        Sintaxis
        condition ? exprIfTrue : exprIfFalse
        let prueba =(true) ? `Es verdadera la prueba` : `Es falsa la respuesta pero verdadera la prueba`;
        console.log(prueba)
        VM665:1 Es verdadera la prueba
        
        let prueba =(false) ? `Es verdadera la prueba` : `Es falsa la respuesta pero verdadera la prueba`;
        console.log(prueba)
        VM751:1 Es falsa la respuesta pero verdadera la prueba
   
        let a= true
        function exeTernario(a) {
            return(a ? '1true' : '1false');
        } 

        console.log(exeTernario(true))
        >> 1true
        console.log(exeTernario(true))
        >>2false
        console.log(exeTernario(null))
        >>1 1false

        let age = 26
        let ageTrue =(age <= 25) ? 'Still young' : 'Time to change';
        console.log(ageTrue);
        Time to change

        let age = 22
        let ageTrue =(age <= 25) ? 'Still young' : 'Time to change';
        console.log(ageTrue);
        Still young
        z
