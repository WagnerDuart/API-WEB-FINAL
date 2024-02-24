const Service = require ("../models/Service")

exports.create = async (req, res) => {
    try {
        const {name_serv, name_prof, description, value} = req.body;
        
        const service = new Service({
            name_serv, 
            name_prof,
            description,
            value
        })

        await service.save();

        res.json({service, msg:" serviço salvo com sucesso"})
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Error ao criar serviço"})
    }
}

exports.findAll = async (req, res) => {
    try {
        const {id} = req.params;

        if (id) {
            const service = await Service.findById(id);
            if (!service){
                return res.status(404).send({ msg: 'Serviço não encontrado.' });
            }
            return res.send(service);
        }else{
            const service = await Service.find();
            return res.send(service);
        }
    } catch (error) {
        console.error(error);
      return res.status(500).send({ msg: 'Erro ao buscar serviço(s).' });
    }
}

exports.remove = async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service){
            return res.status(404).json({msg: "Serviço não encontrado"})
        }

        return res.send({ msg: 'Serviço excluido com sucesso.', service });

    } catch (error) {
        console.error(error);
    return res.status(500).send({ msg: 'Erro ao excluir o serviço.' });
    }
}

exports.update = async (req, res) => {
    
    try {
        const {name_serv, name_prof, description, value} = req.body;

        const service = await Service.findByIdAndUpdate(req.params.id, {
            name_serv,
            name_prof,
            description,
            value
        }, {
            new: true
        });

        if (!service) {
            return res.status(404).json({msg: "Serviço não encontrado"})
        }

        return res.json ({msg: "Serciço atualizado com sucesso.", service});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Erro ao atualizar o serviço.' });         
    }
}