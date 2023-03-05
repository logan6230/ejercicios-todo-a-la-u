let a = 24;
let b = 60;
let c = 8;
let num_menor ;
let num_mayor ;

if (a > b) {
    num_menor = b;
}else{
    num_menor = a;
}

if (a>b && a>c) {
    num_mayor= a;
}else if(b>a && b>c){
    num_mayor = b;
}else{
    num_mayor = c
}

console.log(num_menor);
//Taller. Definir dos variables, asignarles un valor y utilizando decisiones imprimir en la consola la que tenga menor valor

let menor = document.getElementById('num-menor');
menor.innerHTML =
    '<p>' + "Taller. Definir dos variables, asignarles un valor y utilizando decisiones imprimir en la consola la que tenga menor valor"+'</p>' +
    '<p>' + "Numero 1 -> " + a + '</p>' +
    '<p>' + "Numero 2 -> " + b + '</p>' +
    '<p>' + '<b>' +"El numero menor es: " + num_menor  + '</b>' + '</p>';

//Taller. Definir tres variables, asignarles un valor y utilizando decisiones imprimir en la consola la que tenga mayor valor
let mayor = document.getElementById('num-mayor');
mayor.innerHTML = '<p>' + "Taller. Definir tres variables, asignarles un valor y utilizando decisiones imprimir en la consola la que tenga mayor valor"+'</p>' +
'<p>' + "Numero 1 -> " + a + '</p>' +
'<p>' + "Numero 2 -> " + b + '</p>' +
'<p>' + "Numero 3 -> " + c + '</p>' +
'<p>' + '<b>' +"El numero mayor es: " + num_mayor  + '</b>' + '</p>';
