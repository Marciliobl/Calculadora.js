const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite o Primeiro número:", function (num1){
    rl.question("Qual operação você quer EXECUTAR (+, -, *, /):",function(op){
        rl.question("Digite o Segundo número:", function(num2){
        
            num1 = parseFloat(num1.replace(",", "."));
            num2 = parseFloat(num2.replace(",", "."));

            if(op === "+"){
                resultado = num1 + num2;
            }

            else if(op === "*"){
                resultado = num1 * num2;
            }

            else if(op === "-"){
                resultado = num1 - num2;
            }

            else if(op == "/") {
                if(num2 ===0){
                    resultado = "Não existe duvisão por zero";
                }
                else {
                    resultado = num1 / num2
                }
            }

            else{
                resultado = "Operação Inválida";
            }

            console.log("Resultado = " + resultado);

            rl.close();
        });
    });
});
