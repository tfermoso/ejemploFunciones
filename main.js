/**
 * @fileOverview Este archivo contiene ejemplos de funciones con for
 * @author Tomás Fermoso
 * @version 1.0
 */

 /**
  * @description sumaArray Suma los valores de un array
  * @param {Array} numeros array de números
  * @return {Number}
  */
  function sumaArray(numeros){
    let suma=0;
    for(let valor of numeros){
      suma=suma+valor;
    }
    return suma;
  }
  function sumaArray2(numeros){
    let suma=0;
    for(let pos in numeros){
      suma=suma+numeros[pos];
    }
    return suma;
  }
  function sumaArray3(numeros){
    let suma=0;
    for(let i=0;i<numeros.lenght;i++){
      suma=suma+numeros[i];
    }
    return suma;
  }


  let sumaValor=sumaArray3([2,3,4,5]);
  console.log(sumaValor);