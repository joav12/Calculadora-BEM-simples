//Botões
const butoes = $('.butao');
const resultado = document.getElementById('resultado');

//prompt da calculadora
const promptCalc = document.getElementById('prompt');
var aContaFoiFeita = document.getElementById('aContaFoiFeita');


butoes.on("click", function(){
    let buttonValue = $(this).text();

    if(aContaFoiFeita.innerHTML == 'true'){
        promptCalc.innerHTML = "";
        aContaFoiFeita.innerHTML = 'false';
    }

    if(buttonValue == "C"){
        promptCalc.innerHTML = "";
    }
    else if(buttonValue == ""){
        promptCalc.innerHTML = promptCalc.innerHTML.slice(0, -1);
    }
    else{
        if(promptCalc.innerHTML == "" && buttonValue == "+" || promptCalc.innerHTML == "" && buttonValue == "-" || promptCalc.innerHTML == "" && buttonValue == "X" || promptCalc.innerHTML == "" && buttonValue == "÷"){
            alert("Coloque um valor antes da função")
        }
        else{
            if(buttonValue == "+" || buttonValue == "-" || buttonValue == "X" || buttonValue == "÷"){
                promptCalc.innerHTML += ` ${buttonValue} `; 
            }
            else{
               promptCalc.innerHTML += buttonValue;  
            }
        }
    }
})

resultado.addEventListener('click', ()=>{
    let contaInteira = promptCalc.innerHTML;

    if(contaInteira == ""){
        alert("Por favor coloque uma conta na calculadora")
    }
    else{
        contaInteira = contaInteira.split(" ");

        let num1 = parseInt(contaInteira[0]);
        let num2 = parseInt(contaInteira[2]);
        let resul = 0;

        if(contaInteira[1] == "+"){
            resul = num1 + num2;
        }
        else if(contaInteira[1] == "-"){
            resul = num1 - num2;
        }
        else if(contaInteira[1] == "X"){
            resul = num1 * num2;
        }
        else if(contaInteira[1] == "÷"){
            resul = num1 / num2;
        }

        promptCalc.innerHTML = resul;
        aContaFoiFeita.innerHTML = 'true';
    }
    
})

