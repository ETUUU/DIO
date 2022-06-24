
function verificarNum(number1, number2) { // Função principal.

    function menorMaior(number1, number2) { // Função auxiliar responsável por dizer que a soma dos números é maior/menor/igual a 10 e 20.
        if (number1 + number2 > 10) {
            this.comp1 = "maior que";
        } else if (number1 + number2 < 10){
            this.comp1 = "menor que";
        } else {
            this.comp1 = "igual a";
        }
        if (number1 + number2 < 20) {
            this.comp2 = "menor que";
        } else if (number1 + number2 > 20) {
            this.comp2 = "maior que";
        } else {
            this.comp2 = "igual a"
        }
    }

    menorMaior(number1, number2) // Chamada da função auxiliar.

    if (number1 === number2) { // Verificação e ação caso os números sejam iguais.
        return `Os números são iguais. Sua soma é ${number1 + number2}, que é ${comp1} 10 e ${comp2} 20.`
    } 
    else // Verificação e ação caso os números sejam diferentes.
    { 
        return `Os números são diferentes. Sua soma é ${number1 + number2}, que é ${comp1} 10 e ${comp2} 20.`
    }

}

console.log(verificarNum(10, 10));