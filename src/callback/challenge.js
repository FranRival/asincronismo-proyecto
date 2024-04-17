//npm i xmlhttprequest

const xmlhttprequest = requiere('xmlhttprequest')
const API = 'https://api.escuelajs.co/api/v1' 

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {//el valor 4, 0. no nicializado. 
            if (xhttp.status===200) {//200, solicitud correcta.
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{
            //manejo de informacion si hay un error.\
            const error = new error('Error' + urlApi)
            return callback(error, null)
        }
    }
    xhttp.send()
}//validando que el servidor respondio de manera correcta. y con ello obtener informacion.



//el 1, loading.
//2, cuando ya se ejecuto
//3, interactuando.
//4, se ha completado la llamada.