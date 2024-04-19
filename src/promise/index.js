//va a pasar. ahora, manana, o nunca.
//una promesa tiene 3 estados; pendiente, cumplido, rechazado.

const promise = new Promise(function (resolve, reject){
    resolve ('hey!')
})





const cow = 15;

const countCows = new Promise (function (resolve, reject){
    if (cow > 10) {
        resolve(`Tenemos las vaquitas necesarias. Total ${cow}`)
    }else {
        reject('No contamos con las vaquillas alv')
    }    
})

countCows.then((result) => {
    console.log(result);
})