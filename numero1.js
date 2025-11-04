const prompt=require("prompt-sync")();
function rango(){
    let valor=0;
    while(valor<1||valor>5){
    valor=parseInt(prompt("ingrese un numero del 1-5 para terminar"));
        console.log(`el numero es ${valor}es valido`);
    }
}
rango();