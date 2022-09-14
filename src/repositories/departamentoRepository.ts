
const db = require("./Data")
export const obterDepartamentos = async (empresaId) =>{

    const departamentos = await db.select(`SELECT * FROM lojavirtualdepartamento WHERE IdEmpresa=${empresaId} AND IdLojaVirtualDepartamentoPai IS NOT NULL`)

    return departamentos;
}



