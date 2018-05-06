let point = {
    x:10,y:20
};
let loggedPoint = Proxy.createFunction(
    {
        get:function (rcvr, name) {
        console.log("get: ",name);
        return point[name];
    },
    set:function (rcvr,name,value) {
        console.log("set: ",name,value);
        point[name] = value;
        }
    },Object.getPrototypeOf(point));

