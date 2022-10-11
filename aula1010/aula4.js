class Calculadora{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }

    soma(){
        return parseInt(this.num1)+parseInt(this.num2)
    }

    subtraçao(){
        return parseInt(this.num1)-parseInt(this.num2)
    }

    multiplicacao(){
        return parseInt(this.num1) * parseInt(this.num2)
    }

    divisao(){
        return parseInt(this.num1) / parseInt(this.num2)
    }
    get resultado(){
        alert("O valor da soma é: "+this.soma()+"\nO valor da subtração é: "+this.subtraçao()+"\nO valor da multiplicação é: "+this.multiplicacao()+"\nO valor da divisao é: "+this.divisao())
    }
}

botao=document.querySelector("#btn")
    botao.onclick = function(){
        valores= new Calculadora(document.form1.n1.value,document.form1.n2.value)
        valores.resultado
    }