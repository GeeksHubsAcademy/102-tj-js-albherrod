function numPrimo(input) {
    //Voy a suponer que solo se introducen numeros positivos y no decimales
    resultado = new Array();
    if(input == 1){
        resultado[0]=-1;
        return resultado;
    }else{
        for(j=2; j<input; j++){
            if(esPrimo(j)){
                resultado.push(j);
            }
        }
        resultado.push(input);
    }
    console.log(resultado)
    return resultado;
}
function esPrimo(numero){
    for(i=2; i<numero; i++){
        if(numero%i === 0){
            return false;
        }
    }
    return numero !== 1;
}
numPrimo(13);
module.exports = numPrimo;
