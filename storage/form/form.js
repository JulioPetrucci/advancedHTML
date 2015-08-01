(function(){

    var inputFirst = document.getElementById('first');
    var inputLast = document.getElementById('last');
    var inputEmail = document.getElementById('email');
    var inputSend = document.getElementById('send');
    var user = JSON.parse(localStorage.user);

    !user? console.log("erro") :postData();

    function getData(){

        return {
            firstName: inputFirst.value,
            lastName: inputLast.value,
            email: inputEmail.value
        };

    }
    function save(key, data){
        localStorage[key] = JSON.stringify(data)
    }
    inputSend.onclick = function(){
        save('user',getData())
    };

function postData(){
    user = JSON.parse(localStorage.user);
    console.log(user);

    inputFirst.value = user.firstName;
    inputLast.value = user.lastName;
    inputEmail.value = user.email
}

    //localStorage.clear()
    //localStorage.removeItem()

})();



//
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>com Axajx
//(function(){
//
//    var inputFirst = document.getElementById('first');
//    var inputLast = document.getElementById('last');
//    var inputEmail = document.getElementById('email');
//    var inputSend = document.getElementById('send');
//
//    function getData(){
//        return {
//            firstName: inputFirst.value,
//            lastName: inputLast.value,
//            email: inputEmail.value
//        };
//    }
//
//    function send(data){
//        var ajax = new XMLHttpRequest();
//        ajax.open('POST', 'http://httpbin.org/post', true);
//        ajax.onload = function(){
//            console.log(JSON.parse(ajax.responseText));
//        };
//        ajax.onerror = function(){
//            console.log('Não foi');
//        };
//
//        ajax.send(JSON.stringify(data));
//    }
//
//    function save(key, data){
//        localStorage[key] = JSON.stringify(data);
//    }
//
//    function populateFields(user){
//        inputFirst.value = user.firstName;
//        inputLast.value = user.lastName;
//        inputEmail.value = user.email;
//    }
//
//    function checkData(){
//        if(localStorage.user){
//            populateFields(JSON.parse(localStorage.user));
//        }
//    }
//
//    inputSend.onclick = function(){
//
//        var data = getData();
//
//        send(data);
//        save('user', data);
//    };
//
//    checkData();
//
//})();