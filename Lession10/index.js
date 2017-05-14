var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var thuong = new Person("ThuongDQ");
var teo = new Person("Tony Teo");
var tun = new Person("Le Van Tun");

var people = [thuong, teo, tun];
people.forEach(function(pp) {
    pp.on("speak", function(msg) {
        console.log(pp.name + " Said" + msg);
    });
});
thuong.emit("speak", "Chao ban Te0 va ban Tun");
teo.emit("speak", "OK chao ban tuan");
tun.emit("speak", "Chao 2 ban nha");