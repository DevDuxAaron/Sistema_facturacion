var net = require('net')

var client = net.createConnection({port:8080}, (socket) =>{
    console.log("Cliente conectado al servidor\r\n")
    //console.log("\nEl cliente quiere los siguientes productos: \n")
    //socket.write(items_selected)
    
})
client.on('data', function (data) {
    resultado = data.toString()
    console.log(resultado)
    
    //console.log(typeof resultado)
    //console.log(items_selected)
    //client.write(mostrarSolicitud(items_selected))
})


function mostrarSolicitud(items_selected){
    var cadena=""
    for(let item in items_selected["products"]){
        cadena = cadena +"\n"+item+"\n"+ items_selected["products"][item] +"\n"
    }
    return cadena
}

/*
let items_selected = {
    "products" : {
        "1234" : ["Juguete1", 3],
        "1235" : ["Juguete2", 4],
        "1236" : ["Juguete3", 5],
        "1237" : ["Juguete4", 1],
    },
}*/

