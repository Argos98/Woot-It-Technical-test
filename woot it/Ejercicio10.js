
// FizzBuzz: Escriba una función que muestre en consola los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “Fizz”, los mútiplos de 5 por “Buzz”. En
// caso de que sea múltiplo de 3 y 5 al mimsmo tiempo, coloque “FizzBuzz”.


function FizzBuzz(){

    var array = []

    for(let i = 1; array.length < 100; i++ ){

        if(i % 3 === 0 && i % 5 === 0){
            array.push("FizzBuzz")
        }else if(i % 3 === 0){
            array.push("Fizz")
        }else if(i % 5 === 0){
            array.push("Buzz")
        }else{
            array.push(i)
        }
    }
console.log(array)
}

