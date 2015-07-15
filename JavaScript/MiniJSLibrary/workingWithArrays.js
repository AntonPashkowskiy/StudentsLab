/**
 * Created by anton.pashkouski on 15.07.2015.
 */
MiniJSLibrary.arrays = (function(){
    var workWithArrays = {};

    workWithArrays.forEach = function(targetArray, callbackFunction) {
        if (!isCorrectArguments(targetArray, callbackFunction)) {
            return;
        }

        for (var i = 0; i < targetArray.length; i++) {
            callbackFunction(targetArray[i]);
        }
    };

    workWithArrays.where = function(targetArray, predicateFunction) {
        if (!isCorrectArguments(targetArray, predicateFunction)) {
            return;
        }
        var result = [];

        for (var i = 0; i < targetArray.length; i++) {
            if (predicateFunction(targetArray[i])) {
                result.push(targetArray[i]);
            } else {
                break;
            }
        }

        return result;
    };

    workWithArrays.first = function(targetArray, predicateFunction) {
        if (!isCorrectArguments(targetArray, predicateFunction)) {
            return;
        }

        for (var i = 0; i < targetArray.length; i++) {
            if (predicateFunction(targetArray[i])) {
                return targetArray[i];
            }
        }

        return null;
    };

    workWithArrays.last = function(targetArray, predicateFunction) {
        if (!isCorrectArguments(targetArray, predicateFunction)) {
            return;
        }

        for (var i = targetArray.length - 1; i >= 0; i--) {
            if (predicateFunction(targetArray[i])) {
                return targetArray[i];
            }
        }

        return null;
    };

    workWithArrays.select = function(targetArray, selectorFunction) {
        if ( !isCorrectArguments(targetArray, selectorFunction)) {
            return;
        }

        var result = [];

        for (var i = 0; i < targetArray.length; i++) {
            if (selectorFunction(targetArray[i])) {
                result.push(targetArray[i]);
            }
        }

        return result;
    };

    workWithArrays.skip = function(targetArray, count) {
        if (!Array.isArray( targetArray ) || typeof count !== 'number' || count < 0) {
            return;
        }

        if (targetArray.length <= count) {
            return [];
        }

        return targetArray.slice(count);
    };

    workWithArrays.take = function(targetArray, count) {
        if (!Array.isArray(targetArray ) || typeof count !== 'number' || count < 0) {
            return;
        }

        if (targetArray.length <= count) {
            return targetArray.slice();
        }

        return targetArray.slice(0, count);
    };

    workWithArrays.chain = function(targetArray) {
        var resultArray = targetArray;

        return {
            forEach: function(predicateFunction) {
                this.resultArray = workWithArrays.forEach(resultArray, predicateFunction);
                return this;
            },

            where: function(predicateFunction) {
                this.resultArray = workWithArrays.where(resultArray, predicateFunction);
                return this;
            },

            first: function(predicateFunction) {
                this.resultArray = workWithArrays.first(resultArray, predicateFunction);
                return this;
            },

            last: function(predicateFunction) {
                this.resultArray = workWithArrays.first(resultArray, predicateFunction);
                return this;
            },

            select: function(selectorFunction) {
                this.resultArray = workWithArrays.select(resultArray, selectorFunction);
                return this;
            },

            skip: function(count) {
                this.resultArray = workWithArrays.skip(resultArray, count);
                return this;
            },

            take: function(count) {
                this.resultArray = workWithArrays.take(resultArray, count);
                return this;
            },

            result: function() {
                return this.resultArray;
            }
        };
    };

    function isCorrectArguments(arrayArgument, functionArgument) {
        return Array.isArray(arrayArgument) && typeof functionArgument === 'function';
    }

    return workWithArrays;
})();