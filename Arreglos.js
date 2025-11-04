//deckaracion de arreglos
/*
tipods de datos
Number
strig
boolean
null
undifined
tipos de datos compuestos
objet
array
function
*/

function datosarreglos(){
    let datos=[3,7,9,3,2,6];
   let suma=0;
    for(i=0;i<datos.length;i++){
   if((datos[i])%2===0){
    suma += datos[i];
  
   }
}
  console.log(`la suma de los datos es ${suma}`);
}
datosarreglos();
