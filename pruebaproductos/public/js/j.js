let botonBuscar= document.querySelector("#buscar");
botonBuscar.addEventListener("click",function(){
    let valor=document.getElementById("campoBusqueda").value;
    let filtro=document.getElementById("navbarDropdown").value;

    alert(filtro);
    //MostarProductos(valor)
;})






function MostarProductos(nombreP){

    if(nombreP==""){
        var url=`https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products`;
    }else{
        var url=`https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products?name=${nombreP}`;
    }

    
    
    var precio=0;
    
    fetch(url, {
        method: 'get',
        //body:JSON.stringify("german"),
        headers: {
             'Content-Type': 'application/json',
           // "X-CSRF-TOKEN": token
        },
    
    
    })
    .then(respo => {
     return respo.json() 
      
        
    })
    .then(respuesta => {
        
    
    var contenido=document.querySelector("#contenido");
    let produ=[];
    
        respuesta.forEach(element => {
            var nuevoValor=element.price;
       //  console.log(nuevoValor.replace(/\./g,''))
    
         
    
          
        if(nuevoValor.replace(/\./g,'')>=precio){
            let productos=`
    
            <div class="col-md-10">
            <div class="card card-body">
                <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
                    <div class="mr-2 mb-3 mb-lg-0"> <img src="${element.img}" width="150" height="150" alt=""> </div>
                    <div class="media-body">
                        <h6 class="media-title font-weight-semibold"> <a href="#" data-abc="true">${element.name}</a> </h6>
                        <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true"><b>ID</b>${element.id}</a></li>
                            <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true"><b>CATEGORIES</b> ${element.categories}</a></li>
                        </ul>
                        <p class="mb-3">${element.description}</p>
                        <ul class="list-inline list-inline-dotted mb-0">
                            <li class="list-inline-item">All items from <a href="#" data-abc="true">Mobile point</a></li>
                            <li class="list-inline-item">Add to <a href="#" data-abc="true">wishlist</a></li>
                        </ul>
                    </div>
                    <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                        <h3 class="mb-0 font-weight-semibold">${element.price}</h3>
                        <div> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                        <div class="text-muted">1985 reviews</div> <button type="button" class="btn btn-warning mt-4 text-white"><i class="icon-cart-add mr-2"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        &nbsp
        
            
            
            `;
        
            produ.push(productos)
        }
    
    
        });
     // console.log(produ);
        contenido.innerHTML=produ.join("");
        
    })


}