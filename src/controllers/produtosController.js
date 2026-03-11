let produtos = [];
let nextId = 1;

function listarProdutos(req, res) {
  res.status(200).json(produtos);
}

function obterProduto(req, res) {
	const id = parseInt(req.params.id);
	const produto = produtos.find(p => p.id === id);
	
	 if (!produto) {
   		 return res.status(404).json({ erro: "Produto não encontrado" });
 	 }

	res.status(200).json(produto);

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
