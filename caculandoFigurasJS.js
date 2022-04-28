//Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado +"cm²");

console.groupEnd();

//Código del triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
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
console.log("La altura del triángulo es " +alturaTriangulo+"cm.")

const perimetroTriangulo =(ladoTriangulo1+ladoTriangulo2+baseTriangulo)
console.log(
    "El perímetro del triángulo mide "
    + perimetroTriangulo
    + "cm"
)

const areaTriangulo=(baseTriangulo*alturaTriangulo) /2;
console.log(
    "El área del triángulo mide "
    + areaTriangulo
    +"cm²"
)
console.groupEnd();

//Código círculo
console.group("Círculo")
const radioCirculo =3;

console.log("El radio del círculo es "
+radioCirculo
+"cm."
)

const diametroCirculo =radioCirculo*2;
console.log("El diametro del círculo es "
+diametroCirculo
+"cm."
)

const circunferenciaCirculo =diametroCirculo*Math.PI
console.log(
    "La circunferencia del círculo es "
    +circunferenciaCirculo
    +"cm."
)

const areaCirculo=(radioCirculo*radioCirculo)*Math.PI
console.log(
    "El área del circulo es "
    +areaCirculo
    +"cm²."
)

console.groupEnd();










 