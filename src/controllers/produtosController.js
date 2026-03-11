let produtos = [];
let nextId = 1;

function listarProdutos(req, res) {
  res.status(200).json(produtos);
}

function obterProduto(req, res) {
}

function criarProduto(req, res) {
}

function atualizarProduto(req, res) {
}

function deletarProduto(req, res) {
}

module.exports = {
  listarProdutos,
  obterProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto
};
