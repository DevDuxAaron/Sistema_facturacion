import { peticion } from './display.mjs'
import net from 'net'



var client = net.createConnection({port:8080}, (socket) =>{
    console.log("Cliente conectado al servidor\r\n")
    console.log("PETICION\n");
    console.log(peticion);
    client.write(JSON.stringify(peticion))
})
var suma = 0


client.on('data', function (data) {
    var resultado = data.toString()
    suma = suma + parseInt(resultado)
    console.log(resultado)
    console.log("La suma total es: ");
    console.log(suma);
    //return suma
    //var rr = resultado.split(" ")
    //console.log(rr)
    //client.end()
})

client.on('end', ()=>{
    console.log(suma);
})
//export{ resultado }

