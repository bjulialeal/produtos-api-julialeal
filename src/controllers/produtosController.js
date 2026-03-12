let produtos = [];
let nextId = 1;

function encontrarProduto(id) {
        return produtos.find((produto) => produto.id === id);
}         

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
	const id = Number(req.params.id);
      	const produtoEncontrado = encontrar(id);
                
        if (!produtoEncontrado) {
                return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
                
        const indice = produtos.findIndex((produto) => produto.id === id);
           
        const produtoAtualizado = {
                id: produtoEncontrado.id,
                nome: req.body.nome,
                descricao: req.body.descricao,
                preco: req.body.preco,
                categoria: req.body.categoria,
                estoque: req.body.estoque,
                ativo: req.body.ativo,
                criado_em: produtoEncontrado.criado_em,
                atualizado_em: new Date()
        };
        
        produtos[indice] = produtoAtualizado;
         
        return res.status(200).json(produtoAtualizado);
}

function deletarProduto(req, res) {
 	const id = parseInt(req.params.id);
	const produtoEncontrado = encontrarProduto(id);

 	if (!produto) {
 		return res.status(404).json({ mensagem: "Produto não encontrado" });
  	}

	const indice = produtos.findIndex(p => p.id === id);

	produtos.splice(indice, 1);

	return res.status(204).send();
}

module.exports = {
	encontrarProduto,
	listarProdutos,
	obterProduto,
	criarProduto,
	atualizarProduto,
	deletarProduto
};
