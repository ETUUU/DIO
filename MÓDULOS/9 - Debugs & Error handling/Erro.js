
function Erro(arr, num) {

    try {
        if (!arr || !num) throw new ReferenceError("Um ou mais parâmetros indefinidos."); 
        if (typeof arr  !== Object) throw new TypeError("Array não é um objeto.");
        if (typeof num !== Number) throw new TypeError("O número digitado é inválido.");
        if (arr.length !== num) throw new RangeError("O número informado deve ser igual ao tamanho do array.");
        return arr;
    } 
    catch(e)
    {
        if (e instanceof ReferenceError){
            console.log("a");
        }
        else if (e instanceof TypeError) {
            console.log("b");
        }
        else{
            console.log("c");
        }
    }
}

console.log(Erro([1, 2], "a"));