const express = require("express");
const { promises } = require("fs")

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const router = express.Router();
const file = "./routers/users.json";

async function readOneFile() {
   let data = await readFile(file, "utf8");
   let json = JSON.parse(data);
   return json;
 }

router.post("/register", async (req, res) => {
   try {
      let register = null;
      let newUser =  await readOneFile();
      let data = req.body;

      let loginValidation = newUser.account.filter(validation => {
         return data.user.login === validation.user.login;
      })
      /* Aplicar mesma validação no campo de login */
      if(loginValidation.length !== 0){
         console.log("Usuário existente");
         res.status(400)
         res.end();

      } else {
         console.log("Usuário Não existe")
         register = {id: newUser.nextId++, ...data};
         newUser.account.push(register);
         
         writeFile(file, JSON.stringify(newUser), err => {
            res.status(400);
         })
         res.status(200);
         res.end();
      }


   } catch (error) {
      res.status(400).send("Algum erro "+ error)
      
   }
});

router.post("/validation", async (req, res) => {
   let {account} = req.body;
   try {
      let login =  await readOneFile();
      let validationLogin = login.account.filter(validation => {
         return validation.user.login === account.user;
      }).filter(validationPswd => {
         validationPswd.user.pswd === account.pswd
      })
      console.log(validationLogin);

      
      res.end()
   } catch (error) {
      console.log("Apresentou um erro: " + error);
   }
})

module.exports = router;