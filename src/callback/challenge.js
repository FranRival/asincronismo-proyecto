//fetch data

const xmlhttprequest = requiere('xmlhttprequest')
const API = 'https://api.escuelajs.co/api/v1' 

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest()

    xhttp.open('GET', urlApi, true)
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {
            if (xhttp.status===200) {
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{
            const error = new error('Error' + urlApi)
            return callback(error, null)
        }
    }
    xhttp.send()
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, function(error2 , data2){
        if (error2) return console.error(error2)
        fetchData(`${API}/categories/${data2.categories.id}`, function (error3, data3){
            if (error3) return console.error(error3)
            
        })
    })
})