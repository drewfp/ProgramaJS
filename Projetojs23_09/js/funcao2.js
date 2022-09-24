function maiornum(){
resp="s"
maior=0
num=0
nomemaior="carlos"
nome=0
while (resp=="s"){
    num=parseInt(prompt("Informe o a idade: "))
    nome=prompt("Informe o nome")
    if (num>maior){
        maior=num
        nomemaior=nome
   
}
 
resp=prompt("Deseja Continuar(S/N)?")
 }
 console.log(nomemaior, "e a pessoa com a maior idade, com ", maior)
return
}
