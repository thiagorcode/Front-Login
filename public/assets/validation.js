/* Envia os dados para a rota User/register e recebe em data o response
e retorna para o solicitante da fuction o status. */
async function sendData(user, pswd) {
    let data = await fetch('user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                login: user,
                pswd: pswd
            }
        })

    });
    return data.status;
 }
 async function receiveData(user, pswd) {
   const data = await fetch('user/validation', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        account: {
            login: user,
            pswd: pswd
        }
    })
     
    })
    console.log(data)
}