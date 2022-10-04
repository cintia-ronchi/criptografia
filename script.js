const btnCriptografa = document.querySelector('.criptografa');
const btnDescriptografa = document.querySelector('.descriptografa');
const texto = document.querySelector('input');
const resultado = document.querySelector('.result');

function converter(texto) {
    let textoConvertido = ''
    for(let i = 0; i < texto.length; i++) {
        if(texto[i] === 'a') {
            textoConvertido += 'ai'
        } else if(texto[i] === 'e') {
            textoConvertido += 'enter'
        } else if(texto[i] === 'i') {
            textoConvertido += 'imes'
        } else if(texto[i] === 'o') {
            textoConvertido += 'ober'
        } else if(texto[i] === 'u') {
            textoConvertido += 'ufat'
        } else {
            textoConvertido += texto[i]
        }
    }

    return textoConvertido;
}

function desconverter(texto) {
    let textoConvertido = texto;
    for (let i = 0; i < texto.length; i++) {
        textoConvertido = textoConvertido.replace('ai', 'a');
        textoConvertido = textoConvertido.replace('enter', 'e');
        textoConvertido = textoConvertido.replace('imes', 'i');
        textoConvertido = textoConvertido.replace('ober', 'o');
        textoConvertido = textoConvertido.replace('ufat', 'u');
    }
    return textoConvertido;
}

function criptografa(){
    resultado.innerHTML = converter(texto.value);
    texto.value = ''
}

function descriptografa() {
    resultado.innerHTML = desconverter(texto.value);
    texto.value = '';
}

btnCriptografa.addEventListener('click', criptografa);
btnDescriptografa.addEventListener('click', descriptografa);

