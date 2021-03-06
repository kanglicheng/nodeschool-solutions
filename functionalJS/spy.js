'use strict';
(function () {
    function Spy(target, method) {
        var fn = target[method];
        var res = {
            count: 0
        };
        target[method] = function () {
            res.count++;
            return fn.apply(this, arguments);
        };
        return res;
    }
    module.exports = Spy;
}());
