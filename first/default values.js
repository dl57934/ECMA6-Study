//ECMA5
function handleRequest(data,method){
    method = method || "GET";
}

//ECMA6
function handleRequest2(data,method = 'GET') {
    console.log(method); //GET
}