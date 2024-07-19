const { app }  = require('./app');

app.listen(3000, (req, res)=>{
    console.log(`Servidor rodando na porta: http://localhost:3000`);
});