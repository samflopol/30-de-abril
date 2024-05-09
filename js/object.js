var items = localStorage.getItem('ListObject')
items = items ? JSON.parse(items) : []
showItems()

function addItem() {
    let NombreProducto = document.getElementById('NombreProducto').value 
    let Costo = document.getElementById('Costo').value 
    let observacion = document.getElementById('observacion').value 

    if(NombreProducto && Costo && observacion){
        items.push(
                    {
                        'nombreProducto': NombreProducto, 
                        'Costo': Costo,
                        'observacion':observacion
                    }
                )
        showItems()
    }
}

function showItems() {
    document.getElementById('NombreProducto').value = ''
    document.getElementById('Costo').value = ''
    document.getElementById('observacion').value = ''
    document.getElementById('NombreProducto').focus()
    
    let html = ''
    items.forEach( (data, indice) => {

        html += '<div class="row border border-warning mt-2 mb-2 ms-2 me-2">'
            html += `<div class="col-5"> ${data.nombreProducto} </div>`
            html += `<div class="col-5"> ${data.Costo} </div>`
            html += `<div class="col-5"> ${data.observacion} </div>`
            html += `<div class="col-2 mt-2 mb-2"> 
                        <a href="#" class="btn btn-danger" onclick=deleteItem(${indice}) > X </a>  
                    </div>`
        html += '</div>'

    });
    
    /*items.forEach(element => {
        console.log(element.nombreProducto)
    });

    for (const element of items) {
        console.log(element.nombreProducto)
    }*/

    localStorage.setItem('ListObject', JSON.stringify(items) )
    document.getElementById('items-list').innerHTML = html
}

function deleteItem(indice) {
    items.splice(indice, 1)
    showItems()
}

