// Hacer un función que reciba como parámetro un string y retorne:

// true: Si el texto es un palíndromo
// false: en caso contrario

// Nota: un palíndromo es una palabra que se lee igual al derecho y al revés.  Por ejemplo: RADAR, 12321




function knowPalindromes(word){
   
     var condition = false ;

   
    var rotateWord = "";

    var x = word.length;

    while(x>=0){
        rotateWord = rotateWord + word.charAt(x);
        x--
    }

    if(rotateWord.toLowerCase() == word.toLowerCase()){
        condition = true

    }

    return condition

}