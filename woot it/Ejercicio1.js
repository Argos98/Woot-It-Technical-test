//Hacer una función que reciba como parámetro un string y retorne el string al revés.


function wordFlip(word){

    var rotateWord = "";

    var x = word.length;

    while(x>=0){
        rotateWord = rotateWord + word.charAt(x);
        x--
    }
    
    return rotateWord;
}

