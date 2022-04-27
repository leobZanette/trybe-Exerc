let submit = document.getElementById('enviar');

submit.addEventListener('click', handleSubmit)



let apagar = document.getElementById('apagar');

function apagarTudo() {
    let elements = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');

    for (let i = 0; i < elements.length; i += 1) {
        // let userInput = elements[i];
        // userInput = '';
        // userInput.checked = false;
        elements[i] ='';

    }
    textArea.value = '';
}

apagar.addEventListener('click', apagarTudo);

function enableEnviar() {
    let concordo = document.querySelector('#check2');
    submit.disabled = !concordo.checked;
}


let concordo = document.querySelector('#check2');

concordo.addEventListener('change', enableEnviar)


function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
    const name = document.querySelector('#nome').value.length;
    const invalidName = name < 10 || name > 40;
    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }

function handleSubmit(event) {
    event.preventDefault();
    let validation = textInputValidation();
    if (validation === false) {
        alert('dados invalidos');
    } else {
        alert('dados enviado com sucesso')
    }
}