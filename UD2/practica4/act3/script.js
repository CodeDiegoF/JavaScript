const array = [1,2,3,4]
function spread(valor1, valor2, valor3, valor4){
    return valor1 + "," + valor2 + "," + valor3 + "," + valor4;
}

alert(spread(...array))