const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ msg: 'Livro incluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao incluir livro.' });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        await excluir(req.params.codigo);
        res.json({ msg: 'Livro excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao excluir livro.' });
    }
});

module.exports = router;