
//if(!localStorage.user){
    localStorage.user = JSON.stringify({name: 'raul gil', email: "raul@gil"});/*salva obj*/

    console.log(JSON.parse(localStorage.user));/*post obj*/
//}
