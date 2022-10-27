let btn = document.getElementById("btn_bill")
let items_list = document.getElementById("items_list")
let bill_details = document.getElementById("bill_details")

// ENVIAR AL SERVIDOR
let items_selected

// TODO Obtener los datos del servidor
// PETICION SERVIDOR
let respuesta = {
    "products" : {
        "1234" : ["Juguete1", 100],
        "1235" : ["Juguete2", 89],
        "1236" : ["Juguete3", 59],
        "1237" : ["Juguete4", 209],
    },
    "total" : 1234,
    "tipo_pago": "Una sola vez",
    "nit" : "123456"
}

let show_items = () => {
    let frag = document.createDocumentFragment()
    for (const id_prod in respuesta["products"]) {
        if (Object.hasOwnProperty.call(respuesta["products"], id_prod)) {
            const element = respuesta["products"][id_prod];
            let bill_item = document.createElement("div")
            bill_item.classList.add("item-content")
            bill_item.innerHTML = `
                <h5 class="item-title">${element[0]}</h5>
                <h5 class="item-title">${element[1]}$</h5>
            `
            // console.log(typeof(bill_item));
            frag.appendChild(bill_item)
        }
    }
    items_list.appendChild(frag)

    let frag2 = document.createDocumentFragment()
    
    let monto = document.createElement("div")
    monto.classList.add("bill_detail")
    monto.innerHTML = `
        <h5>Monto</h5>
        <p>${respuesta["total"]}$</p>
    `
    frag2.appendChild(monto)
    
    let tipo = document.createElement("div")
    tipo.classList.add("bill_detail")
    tipo.innerHTML = `
        <h5>Tipo de pago</h5>
        <p>${respuesta["tipo_pago"]}</p>
    `
    frag2.appendChild(tipo)

    let nit = document.createElement("div")
    nit.classList.add("bill_detail")
    nit.innerHTML = `
        <h5>NIT / CI</h5>
        <p>${respuesta["nit"]}</p>
    `
    frag2.appendChild(nit)
    bill_details.appendChild(frag2)
}

btn.addEventListener("click", () => {
    console.log("Imprimiendo");
    window.print()
})

window.onload = () => {
    items_selected = JSON.parse(localStorage.getItem("kart"));
    
    // TODO Aqui en se obtendran los datos del servidor
    // products = JSON.parse(localStorage.getItem("products"));
    
    show_items()
}