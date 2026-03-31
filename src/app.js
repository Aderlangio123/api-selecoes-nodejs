import express from "express"
import routes from "./routes.js";

const app = express()
// npm init -y - criar o package.json
// criar rota padrão ou raiz


app.use(express.json())
// usar o routes
app.use(routes)
 
// nodemon serve para atualizar automatico, sem precisar parar e iniciar o servidor

export default app; 
