var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Menentukan bahwa decorator tidak mempengaruhi jenis pengembalian
        console.log("calling ".concat(key, " with args ").concat(args));
        var result = originalMethod.apply(this, args);
        console.log("result ".concat(result));
        return result; // Mengembalikan hasil seperti semula
    };
}
var Logger = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _logMessage_decorators;
    return _a = /** @class */ (function () {
            function Logger() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Logger.prototype.logMessage = function (message) {
                console.log("logged message: ".concat(message));
                return "logged Message : ".concat(message);
            };
            return Logger;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _logMessage_decorators = [logMethod];
            __esDecorate(_a, null, _logMessage_decorators, { kind: "method", name: "logMessage", static: false, private: false, access: { has: function (obj) { return "logMessage" in obj; }, get: function (obj) { return obj.logMessage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var logger = new Logger();
logger.logMessage("Hello World");
// class Herbivore {
//   public animalName: string;
//   private animalAge: number;
//   constructor(animalName: string, animalAge: number) {
//     this.animalName = animalName;
//     this.animalAge = animalAge;
//   }
//   public sayHello() {
//     return `i'am ${this.animalAge}years old`;
//   }
// }
// var cow = new Herbivore("cow", 98);
// console.log(cow.animalName);
// //console.log(cow.animalAge); // error karena animal age private
// console.log(cow.sayHello());
