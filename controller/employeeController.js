const Employee = require("../models/Employee")


exports.create = async (req, res) => {
    try {
        const { nome, treinamento, descricao, redes_sociais } = req.body;

        const funcionario = new Employee({
            nome,
            treinamento,
            descricao,
            redes_sociais,
        });

        await funcionario.save();

        res.json({ funcionario, msg: "Funcionário salvo com sucesso" });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao salvar funcionário" });
    }
};

exports.remove = async (req, res) => {
    try {
        const funcionario = await Employee.findByIdAndDelete(req.params.id);

        if (!funcionario) {
            return res.status(404).json({ msg: "Funcionário não encontrado" });
        }

        res.json({ msg: "Funcionário removido com sucesso!" });
    } catch (error) {
        res.status(500).json({ msg: "Erro ao excluir funcionário" });
    }
};


exports.findAll = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const funcionario = await Employee.findById(id);
            if (!funcionario) {
                return res.status(404).send({ msg: 'Funcionário não encontrado.' });
            }
            return res.send(funcionario);
        } else {
            const funcionarios = await Employee.find();
            return res.send(funcionarios);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: 'Erro ao buscar funcionário(s).' });
    }
};

exports.update = async (req, res) => {
    try {
        const { nome, treinamento, descricao, redes_sociais } = req.body;

        const funcionario = await Employee.findById(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado.' });
        }

        // Atualize os dados do funcionário
        funcionario.nome = nome;
        funcionario.treinamento = treinamento;
        funcionario.descricao = descricao;
        funcionario.redes_sociais = redes_sociais;

        // Salve as alterações
        await funcionario.save();

        return res.json({ msg: 'Funcionário atualizado com sucesso.', funcionario });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao atualizar o funcionário.' });
    }
};

