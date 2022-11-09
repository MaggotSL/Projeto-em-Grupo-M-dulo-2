 // Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
 (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
// Ocultar e revelar senha
  const senha = document.querySelector('.senha');
  const btn = document.querySelector('.btns');

  btn.onclick = () =>
  {
    if (senha.type === 'password')
    {
        senha.type = 'text'
        btn.src = 'img/eye_close.png'
    }
    else 
    {
        senha.type = 'password'
        btn.src = 'img/eye_open.png'
    }
    };
  
const senha2 = document.querySelector('.senha2');
const btn2 = document.querySelector('.btns2');

  btn2.onclick = () =>
  {
    if (senha2.type === 'password')
    {
        senha2.type = 'text'
        btn2.src = '/img/eye_close.png'
    }
    else 
    {
        senha2.type = 'password'
        btn2.src = '/img/eye_open.png'
    }
    };

// Preenchimento CEP
const limparFormulario = (endereco) =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('logradouro').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('logradouro').value = 'CEP incorreto!';
    }
     
}
document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);