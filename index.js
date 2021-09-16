if(process.env.NODE_ENV!== 'production'){ // validação para banco de produção "heroku"
    require('dotenv').config();
};
// const corsOptions = {
//     origin: 'https://todo-list-walter.herokuapp.com/tarefas',
//     optionSucessStatus: 200
// };
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
const Connect = require('./connect/connect');
const db_url = process.env.DB_URL;
const db_user= process.env.DB_USER;
const db_password= process.env.DB_PASSWORD;
const db_data= process.env.DB_DATA;
const tarefaRota = require('./routes/index.routes');

Connect(db_url,db_user,db_password,db_data); // parametros de conexão

app.use(express.json());  
app.use('/tarefas',tarefaRota);
app.use(cors());
app.get('/',(req,res)=>{
    res.status(404).send('informe a rota desejada na URL');
});
app.listen(process.env.PORT || port,()=>{
    console.info(`Servidor rodando em http://localhost:${port}`)
});