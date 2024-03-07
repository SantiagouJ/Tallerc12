let num1 = prompt("Ingresa un numero");
num1 = parseInt(num1);


let num2 = prompt("Ingresa otro numero");
num2 = parseInt(num2);

let num3 = prompt("Ingresa otro numero");
num3 = parseInt(num3);


if(num1>=num2 && num1>=num3){
    const parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = "El numero " + num1 + " es mayor";

}else if(num2>=num1 && num2>=num3) {
    const parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = "El numero " + num2 + " numero es mayor";
}else{
    const parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = "El numero " + num3 + " numero es mayor";
}