console.log("Display cargada");

// let products_raw = PETICION SERVIDOR
let products_raw = {
    data:[
        {
            id_producto: "10521",
            nombre: "Crocodile Lego set",
            descripcion: "Un armable de cocodrilo",
            categoria: "Creator",
            precio: "89",
            imagen: "https://www.gannett-cdn.com/presto/2021/11/19/USAT/cd15a425-e751-46a8-98c2-86993fcf9dce-croc.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        },
        {
            id_producto: "10522",
            nombre: "Snake Lego set",
            descripcion: "Un armable de serpiente",
            categoria: "Creator",
            precio: "49",
            imagen: "https://www.gannett-cdn.com/presto/2021/11/19/USAT/cd15a425-e751-46a8-98c2-86993fcf9dce-croc.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        },
        {
            id_producto: "10523",
            nombre: "Frog Lego set",
            descripcion: "Un armable de sapo",
            categoria: "Creator",
            precio: "79",
            imagen: "https://www.gannett-cdn.com/presto/2021/11/19/USAT/cd15a425-e751-46a8-98c2-86993fcf9dce-croc.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        }
    ]
}
let products = [...products_raw.data]
let items_selected = {}
let items_wished = {}

// ENVIAR AL SERVIDOR
let peticion = {
     "id" : ["10521", "10522","10523"],
     "cantidad":[10,9,5]
     //"10522" : ["JSnake Lego set", 4],
     //"10523" : ["Frog Lego set", 5]
 }


//let frag = document.createDocumentFragment()
//let products_list = document.getElementById("products")
/*
let catalog = document.getElementById("catalog")
let sidemenu = document.getElementById("sidemenu")*/
/*
let show_catalog = () => {
    while (products_list.firstChild) {
        products_list.removeChild(products_list.lastChild);
    }
    for (let product of products) {
        let prevPrice = product.precio * 1.1
        // Card
        let card = document.createElement("div")
        card.classList.add("card")
        card.id = product.id_producto
        card.innerHTML = `
            <div class="card_image">
                <div class="card_fav">
                    <button class="wish_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                </div>
                <div class="card_image-container">
                    <img src="${product.imagen}" alt="">
                </div>
            </div>
            <div class="card_details">
                <p class="card_code subtitle">Vendor code: ${product.id_producto}</p>
                <h3 class="card_title">${product.nombre}</h3>
                <p class="card_description">${product.descripcion}</p>
            </div>
            <div class="card_options">
                <div class="price_details">
                    <p class="subtitle">Precio:</p>
                    <div class="prices">
                        <h3 class="card_price">${product.precio}$</h3>
                        <p class="subtitle">${Math.round(prevPrice)}$</p>
                    </div>
                </div>
                <div class="card_btns" id ="${product.id_producto}">
                    <button class="card_action delete_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                    <button class="card_action add_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `
        frag.appendChild(card)
    }
    products_list.appendChild(frag)
}

let update_items_selected = () => {
    let list = document.getElementById("selected_products")
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }

    let items_frag = document.createDocumentFragment()
    for (const key in items_selected) {
        if (Object.hasOwnProperty.call(items_selected, key)) {
            let item = document.createElement("div")
            item.classList.add("selected_product")
            item.id = key
            item.innerHTML = `
            <h5>${items_selected[key][0]}</h5>
            <p>${items_selected[key][1]}</p>
            `
            items_frag.appendChild(item)
        }
    }
    list.appendChild(items_frag)
}
let update_items_wished = () => {
    let list = document.getElementById("wish_list")
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
    let items_frag = document.createDocumentFragment()
    for (const key in items_wished) {
        if (Object.hasOwnProperty.call(items_wished, key)) {
            let item = document.createElement("div")
            item.classList.add("selected_product")
            item.id = key
            item.innerHTML = `
            <h5>${items_wished[key][0]}</h5>
            <p></p>
            `
            items_frag.appendChild(item)
        }
    }
    list.appendChild(items_frag)
}

let agregar_item = (id) => {
    // console.log("Agregaste:" + id);
    // console.log(items_selected);
    if (Object.hasOwnProperty.call(items_selected, id)) {
        items_selected[id][1] ++;
    } else {
        let nombre_aux = ""
        nombre_aux = (products.find((item) => {
            return item.id_producto == id
        })).nombre
        items_selected[id] = [nombre_aux, 1]
    }
}

let retirar_item = (id) => {
    // console.log("Eliminaste:" + id);
    if (Object.hasOwnProperty.call(items_selected, id)) {
        if (items_selected[id][1] > 0) {
            items_selected[id][1] --;
        }
        if (items_selected[id][1] == 0) {
            delete items_selected[id];
        }
    }
}
let actualizar_local = () => {
    localStorage.setItem("kart", JSON.stringify(items_selected));
}
let wish_item = (id) => {
    if (Object.hasOwnProperty.call(items_wished, id)) {
        delete items_wished[id];
    } else {
        let nombre_aux = ""
        console.log(products[0].id_producto);
        nombre_aux = (products.find((item) => {
            return item.id_producto == id
        })).nombre
        items_wished[id] = [nombre_aux]
    }
}
let buscar_item_nombre = (word) => {
    if(word != "") {
        products = products.filter((item) => (item.nombre.toLowerCase()).indexOf(word.toLowerCase()) != -1 ? true : false )
    } else {
        products = [...products_raw.data]
    }
    show_catalog()
    // console.log(products);
}

sidemenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("item-title") || e.target.classList.contains("item-icon")) {
        e.target.parentElement.parentElement.classList.toggle("active")        
    } else if(e.target.classList.contains("item-header")){
        e.target.parentElement.classList.toggle("active")        
    }
})

catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete_product")) {
        // console.log(e.target.parentElement.id);
        retirar_item(e.target.parentElement.id)
        actualizar_local()
        update_items_selected()
    } else if (e.target.classList.contains("add_product")) {
        agregar_item(e.target.parentElement.id)
        actualizar_local()
        update_items_selected()
    }
    
    else if (e.target.classList.contains("search_btn")){
        buscar_item_nombre(document.getElementById("search-input").value)
        update_items_selected()
    }
    
    else if (e.target.classList.contains("wish_product")) {
        console.log("Deseando");
        wish_item(e.target.parentElement.parentElement.parentElement.id)
        update_items_wished()
    }
})

export{ peticion }

window.onload = () => {
    // update_items_selected()
    show_catalog()
    localStorage.setItem("products", JSON.stringify(products));
}
*/

export{ peticion }
