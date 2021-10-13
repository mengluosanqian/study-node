"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.sayHello = void 0;
function sayHello(person) {
    return 'Hello, ' + person;
}
exports.sayHello = sayHello;
exports.user = 'Tom';
console.log(sayHello(exports.user));
