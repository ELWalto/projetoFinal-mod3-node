const toDoModel = require('../model/model') //todo model com o modelo da colection

module.exports ={   // exportação das rotas
    get: async (req,res)=>{
        await toDoModel.find({})
    .then(tarefa=>res.status(200).send(tarefa))
    .catch(err=>res.status(400).send(err))
    },
    getId: async (req,res)=>{
        await toDoModel.findOne({_id: req.params.id})
        .then(tarefa=>res.status(200).send(tarefa))
        .catch(err=>res.status(404).send(err))
    },
    post: async (req,res)=>{
        if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.estado && req.body.estado){
            await toDoModel.create(req.body)
            .then(res.status(201).send('Adicionado com sucesso.'))
        }else{
            res.status(404).send('erro')
        }
    },
    put: async (req,res)=>{
        if(req.body && req.body.titulo && req.body.descricao && req.body.prioridade && req.body.estado && req.body.estado){
            await toDoModel.updateOne({ _id: req.params.id }, req.body)
            .then(res.status(200).send('Editado com sucesso!')) 
        }else{
            res.status(404).send('Erro')
        }
    },

    delete: async (req,res)=>{
        await toDoModel.deleteOne({ _id: req.params.id })
        .then(res.status(200).send('Deletado com sucesso!'))
        .catch(err=>res.status(404).send(err))
    }
   
}