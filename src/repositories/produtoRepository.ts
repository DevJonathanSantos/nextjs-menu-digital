const db = require("./Data")
export const obterProdutos = async (departamentoId) =>{

    const produtos = await db.select(`SELECT p.IdProduto, p.NomeProduto,pe.PrecoVenda  FROM produtolojavirtualdepartamento plvd LEFT JOIN produto p ON p.IdProduto =plvd.IdProduto LEFT JOIN produtoempresa pe ON pe.IdProdutoEmpresa =plvd.IdEmpresa WHERE plvd.IdLojaVirtualDepartamento = ${departamentoId}`)
    
    return produtos[0];
}


