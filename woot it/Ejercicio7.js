// Hacer una función que reciba como parámetro un array de números enteros y retorne
// un promedio de los valores del array.

function average(arrayNum){

    var sum = 0;

    for(var x =0; x < arrayNum.length; x ++){
        sum += arrayNum[x];
    }

    var aver = sum / arrayNum.length;

    return aver;
}
