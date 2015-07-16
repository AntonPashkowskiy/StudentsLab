/**
 * Created by anton.pashkouski on 15.07.2015.
 */

var testVariable;

alert('isArray function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isArray(testVariable));
testVariable = '';
alert('testVariable === \'\' : ' + MiniJSLibrary.check.isArray(testVariable));
testVariable = [];
alert('testVariable === [] : ' + MiniJSLibrary.check.isArray(testVariable));



alert('isBoolean function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isBoolean(testVariable));
testVariable = '';
alert('testVariable === \'\' : ' + MiniJSLibrary.check.isBoolean(testVariable));
testVariable = false;
alert('testVariable === false : ' + MiniJSLibrary.check.isBoolean(testVariable));



alert('isDate function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isDate(testVariable));
testVariable = '';
alert('testVariable === \'\' : ' + MiniJSLibrary.check.isDate(testVariable));
testVariable = new Date();
alert('testVariable === new Date() : ' + MiniJSLibrary.check.isDate(testVariable));



alert('isNumber function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isNumber(testVariable));
testVariable = '';
alert('testVariable === \'\' : ' + MiniJSLibrary.check.isNumber(testVariable));
testVariable = 0;
alert('testVariable === 0 : ' + MiniJSLibrary.check.isNumber(testVariable));



alert('isString function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isString(testVariable));
testVariable = 0;
alert('testVariable === 0 : ' + MiniJSLibrary.check.isString(testVariable));
testVariable = 'some text';
alert('testVariable === \'some text\' : ' + MiniJSLibrary.check.isString(testVariable));



alert('isFunction function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isFunction(testVariable));
testVariable = 0;
alert('testVariable === 0 : ' + MiniJSLibrary.check.isFunction(testVariable));
testVariable = function() {};
alert('testVariable === function() {} : ' + MiniJSLibrary.check.isFunction(testVariable));



alert('isUndefined function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isUndefined(testVariable));
testVariable = 0;
alert('testVariable === 0 : ' + MiniJSLibrary.check.isUndefined(testVariable));
testVariable = undefined;
alert('testVariable === undefined : ' + MiniJSLibrary.check.isUndefined(testVariable));



alert('isNull function testing.');
testVariable = null;
alert('testVariable === null : ' + MiniJSLibrary.check.isNull(testVariable));
testVariable = 0;
alert('testVariable === 0 : ' + MiniJSLibrary.check.isNull(testVariable));
testVariable = undefined;
alert('testVariable === undefined : ' + MiniJSLibrary.check.isNull(testVariable));


var testArray = [2, 3, 5, 6, 7, 9, 12, 23, 12];
alert('Work with arrays functions testing. Source array: ' + testArray);
alert('Where(x => x != 9)' + MiniJSLibrary.arrays
        .where(testArray, function(x) {
            return x !== 9;
        })
);
alert('First(x => x > 20 && x < 30): ' + MiniJSLibrary.arrays
        .first(testArray, function(x) {
            return x > 20 && x < 30;
        })
);
alert('Last(x => x < 10): ' + MiniJSLibrary.arrays
        .last(testArray, function(x) {
            return x < 10;
        })
);
alert('Select(x => x < 10): ' + MiniJSLibrary.arrays
        .select(testArray, function(x) {
            return x < 10;
        })
);
alert('Skip(3): ' + MiniJSLibrary.arrays.skip(testArray, 3));
alert('Take(3): ' + MiniJSLibrary.arrays.take(testArray, 3));
alert('Where x < 10 select x * 2: ' + MiniJSLibrary.arrays.chain(testArray)
        .where(function(x) {
            return x < 10;
        })
        .select(function(x) {
            return x * 2;
        })
        .result()
);


