var net = require('net')
var mysql = require('mysql')


var server = net.createServer((socket) =>{
    console.log("Cliente Conectado Satisfactoriamente")
    obtenerDatosBD(socket)
    
    
    socket.on('data', (data) => {
        console.log("Productos solicitados")
        let peticion = data.toString()
        console.log(peticion);
        console.log("PRODUCTOS SOLICITADOS\n");
        peticion = JSON.parse(peticion)
        console.log(peticion);
        calcularTotal(socket,peticion)
    })


    socket.on('end', function(){
        console.log("El cliente se desconecto")
        socket.write("Desconectado del servidor")
    })
})
server.listen(8080, function(){
    console.log("EL servidor esta escuchando en el puerto: 8080")
    console.log("\nProductos disponibles en la base de datos")
    //console.log(mostrarProductsRaw(products_raw))
    
})



function obtenerDatosBD(socket) {
    var connection = mysql.createConnection({
        host: 'localhost',
        database: 'lab273',
        user: 'admin',
        password: 'admin',
    });
    
    //var datos = []
    connection.connect((err) => {
        if (err) {
            console.error('Error de conexión ')
            return
        }
        console.log('Conectado con el identificador: ' + connection.threadId)
    })
    //Haciendo consultas
    connection.query('SELECT * FROM producto', (error, results, fields) => {
        if (error)
            throw error
        //Iterar la DB

        let answer = [...results]

        results.forEach(result =>{
           
            console.log("Producto: \r\n" +"ID: "+result['id_producto']+"\r\n"+"Nombre: "+result['nombre']+"\r\n"+"Descripcion: "+result['descripcion']+"\r\n"+"Categoria: "+result['categoria']+"\r\n"+"Precio: "+result['precio']+"\r\n")
            
        })

        //console.log(answer);
        
    })
    connection.end()

}


function calcularTotal(socket,peticion){
    var connection = mysql.createConnection({
        host: 'localhost',
        database: 'lab273',
        user: 'admin',
        password: 'admin',
    });
    
    var total = []
    var sumaProd = 0
    connection.connect((err) => {
        if (err) {
            console.error('Error de conexión ')
            return
        }
        console.log('Conectado con el identificador: ' + connection.threadId)
    })
    //Haciendo consultas
    
    for (let i = 0; i < peticion.id.length; i++) {
        connection.query('SELECT * FROM producto', (error, results) => {
            if (error)
                throw error
    
    
            results.forEach(result =>{
                
                if (result['id_producto']==peticion.id[i]) {
                    //sumaProd = peticion.cantidad[i]*result['precio']
                    socket.write((peticion.cantidad[i]*result['precio']).toString())
                }
                
            })
    
            
        })
        
        //total.push(sumaProd)
        
    }
    connection.end()
    /*connection.query('SELECT * FROM producto', (error, results) => {
        if (error)
            throw error


        results.forEach(result =>{

            
        })

        
    })
    connection.end()*/
    return total
}




