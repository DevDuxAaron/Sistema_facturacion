import express from 'express'
import mysql from 'mysql'

const port = 3000
const app = express()

const conexion = mysql.createConnection({
    host: 'localhost',
    database:'proyecto273',
    user:'root',
    password: '123456'
})

conexion.connect((error) => {
    if (error) {
        console.log(error.stack);
        return
    }
    console.log("Conectado", conexion.threadId);
})

app.get("/",(req, res) => {
    // res.send('Hola Mundo')
    let sql = "SELECT * FROM cliente"
    conexion.query(sql, (error, results, fields) => {
        if (error) {
            throw error;
        }
        
        let respuesta = [...results[data]]
        console.log(respuesta);
        
    })
})

app.listen(prot, ()=> {
    console.log("Si funciona");
})