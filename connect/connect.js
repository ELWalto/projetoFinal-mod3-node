const mongoose = require('mongoose');

const Connect = (url,user,password,banco)=>{
    mongoose.connect(`mongodb+srv://dbadministrador:Jstq3cCIggLasGzj@todo-node.akdb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        user: user,
        pass: password,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error(err));
}

module.exports = Connect;

