
botao = document.querySelector('#btn')
mensagem = document.querySelector('#msg').value
let select = document.querySelector('#criptografia');
let optionValue = select.options[select.selectedIndex].value;
let value = optionValue.value;
botao.onclick = function () {
    mensagem = document.querySelector('#msg').value
    let select = document.querySelector('#criptografia');
    let optionValue = select.options[select.selectedIndex].value;
    let value = optionValue.value;
    letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    chave = document.querySelector('#chave').value
    crip = []

    if (value == 1) {
        for (i = 0; i < mensagem.length; i++) {
            if (mensagem[i] != ' ') {
                for (j = 0; j < letras.length; j++) {
                    if (mensagem[i] == letras[j]) {
                        crip[i] = letras[(j + x) % letras.length]
                        break
                    }
                }

            }
            else {
                crip[i] = ' '
            }
        }
        alert(crip.join(""))
    } 
   else {
    alert(value)
   }

}