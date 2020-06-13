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
   console.log(req.body)
   try {
      let register = null;
      let newUser =  await readOneFile();
      let data = req.body;

      register = {id: newUser.nextId++, ...data};
      newUser.users.push(register);
      res.end();
      writeFile(file, JSON.stringify(newUser), err => {
         res.status(400);
      })
      
      

   } catch (error) {
      res.status(400).send("Algum erro "+ error)
      
   }
});

module.exports = router;