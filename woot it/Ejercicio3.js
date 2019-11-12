// Hacer una función que reciba como parámetros un string y un caracter. La función
// debe retornar true si el carácter está en el texto o false en caso contrario.

function findCharacter(word, charct){



    var condition = false; 

    var x = word.length;

    while(x>=0){
        if(word.toLowerCase().charAt(x)==charct.toLowerCase()){
            condition = true
        }
        x--
    }


return condition


}