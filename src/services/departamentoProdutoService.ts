import { obterProdutos } from "../repositories/produtoRepository"
import { obterDepartamentos } from "../repositories/departamentoRepository"

class DepartamentoProduto{
    Departamento: string;
}

export const ObertProdutos = async () => {
    var list:DepartamentoProduto[]=[]
    let departamentos = await obterDepartamentos(140);

    if (departamentos) {

        for (let item of departamentos[0]) {
            let produtos = await  obterProdutos(item.IdLojaVirtualDepartamento)
            
            let departamentoProduto :DepartamentoProduto = {
                Departamento:""
            }
            list.push(departamentoProduto);
        }
    }
}
