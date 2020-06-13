let cont = 1;


start();
function start(){
  const cadaster = document.querySelector("#showCadaster")
  preventSubmit();
  cadaster.addEventListener("click", showCadaster)
}

function preventSubmit(){
  function preventforSubmit(event){
    event.preventDefault();
  }
  const form = document.querySelector('form');
  form.addEventListener('submit', preventforSubmit)
 }

function showCadaster(){
  let ocultHome = document.querySelector('#cadaster-login');
  let viwerCadaster = document.querySelector("#box-cadaster");
  let viwerLogin = document.querySelector("#box-login");
  let layout = document.querySelector('#layout');
  const menuUser = document.querySelector("#contUser");
  const buttonSubmit = document.querySelector("#submit")

  switch (cont){
    case 1:
      ocultHome.style.display = "none";
      viwerCadaster.style.display = "block";
      break;
    case 2:
      viwerCadaster.style.display = "none";
      viwerLogin.style.display = "block";
      break;
    case 3:
      layout.style.display = "none";
      menuUser.style.display = "block";
      break;
  }
  
  cont++;
  buttonSubmit.addEventListener("click", submit)
  
}

async function validationCadaster(user, pswd) {
  
  let response = await sendData(user, pswd);
  if(response === 400) {
    alert("Seu usuário já existe no Banco de Dados");
  }else {
    showCadaster();
    alert("Cadastro no Sistema")
  }
}

function submit(){
  let cadasterUser = document.querySelector('#user');
  let cadasterPwd = document.querySelector('#password');
  let cadasterRePwd = document.querySelector('#rePassword');
  
  if(cadasterUser.value.length <= 3){
    alert("Digite o nome do usuário com mais de três caracteres - Lorem Impsom");
  }else{
    if(cadasterPwd.value.length < 8){
      alert("Digite uma senha com mais de 8 caracteres - Lorem Impsum");
    }else{
      if(cadasterPwd.value !== cadasterRePwd.value){
        alert("As senhas digitadas não são iguais - Lorem Impsum");
      }else{
        validationCadaster(cadasterUser.value, cadasterPwd.value);
        
        // Fazer um objeto com person: name e lastname e user e password
      }
    }
  }
  
}


function login(){
  let loginUser = document.querySelector('#loginUser');
  let loginPswd = document.querySelector('#loginPassword');
  receiveData(loginUser.value, loginPswd.value);

  if(loginUser.value !== loginUser.value){
    alert("Login Incorreto - Lorem");
  }else{
    if(loginPswd.value !== loginPswd.value){
      alert("Senha Incorreta - Lorem");
    }else{
      alert("Login Efetuado com sucesso");
      showCadaster();
      const nameUser = document.querySelector("#nameUser");
      nameUser.innerHTML = loginUser.value

      
      
    }
  }
  
}