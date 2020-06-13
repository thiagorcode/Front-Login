const express = require("express");
// Colocar uma foto que possa editar o meio ficar efeito de um pc dentro de outro.
const users = require("./routers/user.js")
const { promises } = require("fs")
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const path = require("path");

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const port = 3000;

const file = "./routers/users.json"

app.use(express.urlencoded());
app.use(express.json());
app.use("/user", users);
app.use(express.static(path.join(__dirname, "public/")));
app.set('views', path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


app.get('/', (req, res) => {
   try {
      res.render("index.html");
      // res.render("index.html")
      
   } catch (error) {
      console.log("Requisition !!! " + error)
      res.status(400).send("Erro");
   }
})
io.on('connection', (socket) => {
   console.log('a user connected');
 });

app.listen(port, async () => {
   try {
      let data = await readFile(file, "utf8");
   } catch (error) {
      const initialJson = {
         nextId: 1,
         account: [

         ]
      }
      writeFile(file, JSON.stringify(initialJson), err => {
         console.log("Não foi possível criar o arquivo!!!" + err);
      })
   }
   console.log("Api Started!!!");
})
