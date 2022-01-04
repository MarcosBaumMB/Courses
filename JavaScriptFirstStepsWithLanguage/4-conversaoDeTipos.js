console.log("Conversão de tipos.");

console.log("ano " + 2022);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));

console.log("17" / "5");
console.log("Baum" / "5"); //NaN - not a number

console.log(6.5);
console.log(6,5);

//Para operações com soma, o JS junta os dois valores string. Para as outras operações aritméticas, ele tenta converter. 
//Quando o resultado é inválido, imprimr NaN.
//Sempre lembrar que js é fracamente tipado.
//Números de ponto flutuante devem ser utilizados com . e não com ,