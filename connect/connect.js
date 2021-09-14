const mongoose = require('mongoose');

const Connect = (url,user,password,banco)=>{
    mongoose.connect(`${url}/${banco}`,{
        user: user,
        pass: password,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error(err));
    
}

module.exports = Connect;

