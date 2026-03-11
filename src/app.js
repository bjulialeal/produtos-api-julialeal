const express = require("express");

const app = express();

const produtosRoutes = require("./routes/produtos");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/v1/produtos", produtosRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
