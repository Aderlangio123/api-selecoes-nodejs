import app from "./app.js";

// escutar a porta 3000
const PORT = process.eventNames.PORT || 3000;

// fazer a comexao

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});
