const prompt=require("prompt-sync")();
function sumaNumeros(){
    let numero;
    let suma=0;
    while(numero!=0){
        numero=parseInt(prompt("ingresa el numero !=0"));
        suma+=numero;
    }
    console.log(`La suma de los numeros ingresados es:${suma}`)
}
sumaNumeros();