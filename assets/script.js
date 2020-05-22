window.addEventListener('load', start);
let cont = 1;
let dadoUser = null;
let dadoPswd = null;

function start(){
  preventSubmit();
}

function preventSubmit(){
  function preventforSubmit(event){
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', preventforSubmit)
}

function showCadaster(){
  let ocultHome = document.querySelector('#cadaster-login');
  let viwerCadaster = document.querySelector("#box-cadaster");
  let viwerLogin = document.querySelector("#box-login")
  let layout = document.querySelector('#layout')
  switch (cont){
    case 1:
      ocultHome.style.display = "none"
      viwerCadaster.style.display = "block"
      break;
    case 2:
      viwerCadaster.style.display = "none"
      viwerLogin.style.display = "block"
      break;
    case 3:
      layout.style.display = "none"
      break;
  }
  
  cont++;
  
  preventSubmit();
}

function submit(){
  let cadasterUser = document.querySelector('#user');
  let cadasterPwd = document.querySelector('#password');
  let cadasterRePwd = document.querySelector('#rePassword');
  
  if(cadasterUser.value.length <= 3){
    alert("Digite o nome do usuário com mais de três caracteres - Lorem Impsom");
  }
  if(cadasterPwd.value.length < 8){
    alert("Digite uma senha com mais de 8 caracteres - Lorem Impsum");
  }
  if(cadasterPwd.value !== cadasterRePwd.value){
    alert("As senhas digitadas não são iguais - Lorem Impsum");
  }
  alert("Cadastro no Sistema")
  bdUser(cadasterUser.value, cadasterPwd.value);
  showCadaster();
}

function bdUser(user, pswd){
  dadoUser = user;
  dadoPswd = pswd;

}

function login(){
  let loginUser = document.querySelector('#loginUser');
  let loginPswd = document.querySelector('#loginPassword');

  if(loginUser.value !== dadoUser){
    alert("Login Incorreto - Lorem");
  }else{
    if(loginPswd.value !== dadoPswd){
      alert("Senha Incorreta - Lorem");
    }else{
      alert("Login Efetuado com sucesso");
      showCadaster();
      dadoUser = null;
      dadoPswd = null;
    }
  }
  
}