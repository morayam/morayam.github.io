document.addEventListener("DOMContentLoaded", function(e){
getJSONData(CARS).then(function(resultObj){
    if(resultObj.status === "ok"){
        carList = resultObj.data.listaDeProductos;
    }
    console.log(carList);
})
})

