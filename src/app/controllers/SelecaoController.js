import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
  async index(req, res) {
    try {
      const row = await SelecaoRepository.findAll();
      res.json(row); 
    } catch (error) {
      console.error(error);
     res.status(500).json({ erro: error });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await SelecaoRepository.findById(id);
      res.json(row);
    } catch (error) {
      console.log(error);
      res.status(500).json({erro: error})
    }
  }
  async store(req, res) {
    try {
      const selecao = req.body;
      const row = await SelecaoRepository.create(selecao)
      res.json(row)
    } catch (error) {
      console.log(error)
      res.status(500).json({erro: error})
    }
    
  }
  async update(req, res) {
      try {
        const id = req.params.id;
        const selecao = req.body;
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
      } catch (error) {
        console.log(error)
        res.status(500).json({erro: error})
      }

  }
  
  async delete(req, res) {
    try {
        const id = req.params.id;
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    } catch (error) {
      console.log(error)
      res.status(500).json({erro: error})
    }
}
}

// padrao singleton
export default new SelecaoController();
