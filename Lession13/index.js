"use strict"
var EventEmitter = require("events").EventEmitter;

class Logger extends EventEmitter {
    constructor() {
        super();
        this.msg = "laptrinhtructuyen.com";
    }

    onLog(event) {
        this.on(event, function(mess) {
            console.log("Event " + event + ": " + mess);
        });
    }

    onEmit(event, msg) {
        if (!msg) {
            msg = this.msg;
        }
        this.emit(event, msg);
    }
}

var logger = new Logger;
logger.onLog("log");
logger.onEmit("log", "Hello ThuongDQ");

logger.onLog("people");
logger.onEmit("people", "Check function");

logger.onLog("process");
logger.onEmit("process");









// emitter.on("log", function(mess) {
//     console.log("Log: " + mess);
// });
// emitter.emit("log", "Hello ThuongDQ");