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
      console.log(loginValidation)

      // Verifica se usuário existe
      // Aplicar alguma proprieda que ao verificar que o usuário existe apresenta para o usuário o usuário é existente.
      if(loginValidation.length !== 0){
         console.log("Usuário existente");
         res.end()

      }else {
         console.log("Usuário Não existe")
         register = {id: newUser.nextId++, ...data};
         newUser.account.push(register);
         res.end();
         writeFile(file, JSON.stringify(newUser), err => {
         res.status(400);
      })
      }

      

      
      
      

   } catch (error) {
      res.status(400).send("Algum erro "+ error)
      
   }
});

router.get("/validation", async (req, res) => {
   try {
      
   } catch (error) {
      
   }
})

module.exports = router;