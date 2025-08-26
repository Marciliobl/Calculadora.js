const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculadora() {
    rl.question("Digite o primeiro numero: ", function(num1) {
        rl.question("Qual operacao voce quer (+, -, *, /): ", function(op) {
            rl.question("Digite o segundo numero: ", function(num2) {
                
                
                num1 = parseFloat(num1.replace(",", "."));
                num2 = parseFloat(num2.replace(",", "."));

                let resultado;

                if(op === "+"){
                    resultado = num1 + num2;
                }
                else if(op === "-"){
                    resultado = num1 - num2;
                }
                else if(op === "*"){
                    resultado = num1 * num2;
                }
                else if(op === "/"){
                    if(num2 === 0){
                        resultado = "Nao existe divisao por zero";
                    } else {
                        resultado = num1 / num2;
                    }
                }
                else {
                    resultado = "Operacao invalida";
                }

                console.log("Resultado = " + resultado);

                
                rl.question("Quer fazer outra operacao? (s/n): ", function(resposta) {
                    if (resposta.toLowerCase() === "s") {
                        
                        calculadora();
                    } else {
                        console.log("Programa finalizado!");
                        rl.close();
                    }
                });
            });
        });
    });
}


calculadora();
