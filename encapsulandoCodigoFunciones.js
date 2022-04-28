//Código del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado mide: " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado mide: " + areaCuadrado +"cm²");

console.groupEnd();

//Código del triángulo

console.group("Triángulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 1;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm."
);
console.log("La altura del triángulo es " +alturaTriangulo+"cm.") */

function perimetroTriangulo(lado1,lado2,base){
    return (Number(lado1)+Number(lado2)+Number(base));
}

/* console.log(
    "El perímetro del triángulo mide "
    + perimetroTriangulo
    + "cm"
) */

function areaTriangulo(base,altura){
    return base*altura/2;
}

/* console.log(
    "El área del triángulo mide "
    + areaTriangulo
    +"cm²"
) */

console.groupEnd();

//Código círculo
console.group("Círculo")
/* const radioCirculo =3; */

/* console.log("El radio del círculo es "
+radioCirculo
+"cm."
) */

function diametroCirculo(radio){
    return radio*2;
}

/* 
console.log("El diametro del círculo es "
+diametroCirculo
+"cm."
)
 */

function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI
} 


/* 
console.log(
    "La circunferencia del círculo es "
    +circunferenciaCirculo
    +"cm."
) */

function areaCirculo(radio){
    return (radio*radio)*Math.PI
}

/* =(radioCirculo*radioCirculo)*Math.PI
console.log(
    "El área del circulo es "
    +areaCirculo
    +"cm²."
) */

console.groupEnd();

//Aquí agrupamos con HTML Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Aquí agrupamos con HTML Triángulo

function calcularPerimetroTriangulo(){
    const InputTriangulo1 = document.getElementById("InputTriangulo1");
    const InputTriangulo2 = document.getElementById("InputTriangulo2");
    const InputTriangulo3 = document.getElementById("InputTriangulo3");
    const value1 = InputTriangulo1.value;
    const value2 = InputTriangulo2.value;
    const value3 = InputTriangulo3.value;
    const  perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro)
}

function calcularAreaTriangulo(){
    const InputTriangulo3 = document.getElementById("InputTriangulo3");
    const InputTriangulo4 = document.getElementById("InputTriangulo4");
    const value3 = InputTriangulo3.value;
    const value4 = InputTriangulo4.value;
    const area = areaTriangulo(value3,value4);
    alert(area)
}

//Aquí agrupamos con HTML Triángulo Isósceles



function alturaTrianguloIsosceles(lados,base){
    if (lados>base/2)
        {
            return(Math.sqrt((lados**2)-(base**2)/4))
        }
    else {
        alert("No es un triángulo isósceles")
    }
}


function calcularAlturaTrianguloIsosceles()
{
    const InputLadoTriangulo = document.getElementById("InputLadoTriangulo");
    const InputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const value1 = InputLadoTriangulo.value;
    const value2 = InputBaseTriangulo.value;
    const alturaTriangulo = alturaTrianguloIsosceles(value1,value2);
    alert(alturaTriangulo)
}




//Aquí agrupamos con HTML Círculo

    function calcularCircunferenciaCirculo() {
        const input = document.getElementById("InputCirculo");
        const value = input.value;
        const circunferencia = circunferenciaCirculo(value);
        alert(circunferencia);
    }
    
    function calcularAreaCirculo(){
        const input = document.getElementById("InputCirculo");
        const value = input.value;
        const area = areaCirculo(value);
        alert(area);
    }
