num=0
soma=0
cont=1
maior=0
while (cont<=4){
    num=parseInt(prompt("Insira o valor: "))
    if(maior<num){
        maior=num
    };  
    soma=soma+num
    cont=cont+1

}
console.log(soma, "o maior numero foi ", maior);