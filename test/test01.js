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
        if(esPrimo(input)){
        resultado.push(input);
    }
    }
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
module.exports = numPrimo;
