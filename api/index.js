const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get('/prueba', (req, res) =>{
    console.log("listo")
})

app.post('usuarios', (req,res) =>{
    console.log(req.body);
    console.log('listo')
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Funcionando');
});