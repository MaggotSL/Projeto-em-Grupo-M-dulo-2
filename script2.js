const senha3 = document.querySelector('.senha3');
const btn3 = document.querySelector('.btns3');

  btn3.onclick = () =>
  {
    if (senha3.type === 'password')
    {
        senha3.type = 'text'
        btn3.src = 'img/eye_close.png'
    }
    else 
    {
        senha3.type = 'password'
        btn3.src = 'img/eye_open.png'
    }
    };