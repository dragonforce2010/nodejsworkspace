var fs = require('fs');
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
server.on("error", function (err) {
    console.log("server error:\n" + err.stack);
    server.close();
});

server.on("message", function (msg, rinfo) {
    console.log("msg length:" + msg.length)
    for(var i= 0; i < msg.length; i++) {
        fs.appendFile("healthdata004.txt", msg[i].toString(16).toString("D2") + " ", function(err) {
            //console.log(err)
        })
    }

    fs.appendFile("healthdata004.txt", "\n\n\n", function(err) {
        //console.log(err)
    })

    //console.log("server got: " + msg + " from " +
    //    rinfo.address + ":" + rinfo.port);
});
server.on("listening", function () {
    var address = server.address();
    console.log("server listening " +
        address.address + ":" + address.port);
});
server.bind(41234);