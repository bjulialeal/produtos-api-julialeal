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
	const { nome, descricao, preco, categoria, estoque } = req.body;

 	 if (!nome || !descricao || preco === undefined || !categoria || estoque === undefined) {
   		 return res.status(400).json({ erro: "Campos obrigatórios não informados" });
 	 }

  	const novoProduto = {
    		id: nextId++,
    		nome,
    		descricao,
    		preco,
    		categoria,
    		estoque,
    		ativo: true,
    		criado_em: new Date(),
	    	atualizado_em: new Date()
 	 };

 	 produtos.push(novoProduto);

 	 res.status(201).json(novoProduto);
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
