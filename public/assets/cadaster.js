function sendData(user, pswd) {
   fetch('user/register', {
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
 }
 function receiveData(user, pswd) {
   fetch('user/register', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({
         user: {
             name: user,
             pswd: pswd
         }
     })
 });
}