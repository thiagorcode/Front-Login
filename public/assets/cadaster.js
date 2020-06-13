function sendData(user, pswd) {
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