const Employee = require("../models/Employee")
const fs = require("fs");

exports.create = async (req, res) =>{
    try {
        const {name,  training, description, social_media} = req.body;

        const employee = new Employee({
            name,
            training,
            description,
            social_media,
        })
        await employee.save();

        res.json({employee, msg:"funcionário salvo com sucesso"})
    } catch (error) {
        res.status(500).json({msg: "Error ao salva funcionário"})
    }
};

exports.remove = async (req, res) => {
    try {
        
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee){
            return res.status(404).json({msg: "funcionário não encontrado"})
        }

        fs.unlinkSync(employee.image_src);

        res.json({msg: "funcionário removido com sucesso!"})

    } catch (error) {
        res.status(500).json({msg: "Erro ao excluir funcionário"});
    }
}
exports.findAll = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (id) {
        const employee = await Employee.findById(id);
        if (!employee) {
          return res.status(404).send({ msg: 'Funcionário não encontrado.' });
        }
        return res.send(employee);
      } else {
        const employees = await Employee.find();
        return res.send(employees);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: 'Erro ao buscar funcionário(s).' });
    }
  };

  exports.update = async (req, res) => {
    try {
        const { name, training, description, social_media } = req.body;

        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send({ msg: 'Funcionário não encontrado.' });
        }

        
        try {
           // Atualize os dados do funcionário
            employee.name = name;
            employee.training = training;
            employee.description = description;
            employee.social_media = social_media;

            // Salve as alterações
            await employee.save();

            return res.send({ msg: 'Funcionário atualizado com sucesso.', employee });
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: 'Erro ao atualizar o funcionário.' });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: 'Erro ao atualizar o funcionário.' });
    }
};
