//letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//mensagem = document.form1.msg.value

//x = document.form1.chave.value

//crip=[]




document.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("btn-confirmar")) {
        const mensagem = document.querySelector(".mensagem").value;
        const chave = document.querySelector(".chave").value;
        const select = document.querySelector(".opcoescrip").value;
        var value = select.options[select.selectedIndex].value;     
        console.log(value);
    }
});

