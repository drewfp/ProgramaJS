function ImcCalc(){
    peso=prompt("Informe o peso: ")
    altura=prompt("Informe a altura")
    altura2=altura * altura
    imc=peso/altura2
    if(imc<17){
        console.log("Muito abaixo do peso")
    }
    else if(imc<18.49){
        console.log("Abaixo do peso")
    }
    else if(imc<24.99){
        console.log("Peso Normal")
    }
    else if(imc<29.99){
        console.log("Acima do Peso")
    }
    else if(imc<34.99){
        console.log("Obesidade I")
    }
    else if(imc<39.99){
        console.log("Obesidade II")
    }
    else {
        console.log("Obesidade III")
    }

}

