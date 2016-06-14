(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.komponent = factory());
}(this, function () { 'use strict';

    var register = function register(elementName, template, ViewModel) {
        var async = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

        var registration = {};
        registration.template = template || " ";
        registration.synchronous = !async;
        if (ViewModel) {
            registration.viewModel = {
                createViewModel: function createViewModel(params, componentInfo) {
                    return new ViewModel(params, componentInfo);
                }
            };
        }
        ko.components.register(elementName, registration);
    };
    var komponent = function komponent(options) {
        return function (Ctor) {
            return register(options.name, options.template, Ctor, options.async);
        };
    };

    return komponent;

}));