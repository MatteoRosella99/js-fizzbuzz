//Programma FizzBuzz

//Variabili
var numero;

//Ciclo 100 numeri
for (numero = 1; numero < 101; numero++){ //condizione for per ripetere l'operazione 100 volte (partendo dal numero 1 fino al 100)
  if (numero % 15 == 0){ //Se il numero è divisibile per 15
    console.log("FizzBuzz"); //Allora scrivi in console "FizzBuzz"
  }
  else if (numero % 5 == 0){ //Se il numero è divisibile per 5
    console.log("Buzz"); //Allora scrivi in console Buzz
  }
  else if (numero % 3 == 0){ //Se il numero è divisibile per 3
    console.log("Fizz"); //Allora scrivi in console Fizz
  }
  else{ //Se il numero non è divisibile ne per 3 che per 5
    console.log(numero); //Allora scrivi il numero
  }
}

//Va messo nel primo "if" il numero 15 (ovvero 3x5) perchè è la prima condizione
//che deve verificare. Nel caso in cui in cui fosse divisibile per 15 vuol dire
//che sarebbe divisibile anche per 3 o 5 e si fermerebbe uno step prima scrivendo
// o "Buzz" o "Fizz"
