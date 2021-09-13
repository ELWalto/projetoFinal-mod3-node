const mongoose = require('mongoose');

const Model = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: {type: String, required: true},
    prioridade: {type: String, required: true},
    estado: {type: String, required: true},
    prazo: {type: String},
    criacao: {type: Date, default: Date.now}
})
const toDoModel = mongoose.model('tarefas',Model);

module.exports = toDoModel;

