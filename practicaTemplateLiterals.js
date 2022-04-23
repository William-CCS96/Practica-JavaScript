code//Interpolación de expresiones

let a = 20
let b = 15

console.log('Cinco es ' + (a-b) + ' y\nno ' + (2*a-b) + '.');

//Aplicando plantillas literales

let c = 40
let d = 80

console.log(`Ciento veinte ${c+d} y no ${c-d}.`);


//Anidamiento de plantilla

En ES5:

let classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');

En ES2015 con plantillas literales y sin anidamiento:

const classes = `header ${ isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;


ww