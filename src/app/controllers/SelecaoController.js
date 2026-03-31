import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  async index(req, res) {
    // res.status(200).send(selecoes)
    try {
      const row = await SelecaoRepository.findAll();
      res.json(row); 
    } catch (error) {
      console.error(error);
     res.status(500).json({ erro: error });
    }
  }

  async show(req, res) {
    // res.json(buscarSelecaoPorId(req.params.id))
    const id = req.params.id;
    const row = await SelecaoRepository.findById(id);
    res.json(row);
  }
  async store(req, res) {
    // selecoes.push(req.body)
    // res.status(201).send("Seleção cadastrada!")
    const selecao = req.body;
    const row = await SelecaoRepository.create(selecao)
    res.json(row)
    
  }
  async update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const row = await SelecaoRepository.update(selecao, id)
    res.json(row)
  }
  
  async delete(req, res) {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes.splice(index, 1)
    // res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
    const id = req.params.id;
    const row = await SelecaoRepository.delete(id)
    res.json(row)
}
}

// padrao singleton
export default new SelecaoController();
