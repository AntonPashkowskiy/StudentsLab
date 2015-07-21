/**
 * Created by anton.pashkouski on 17.07.2015.
 */
/* Notation in log. The heir constructor may be added to the handlers factory. */
define(function() {
    'use strict';
    var INFORMATION_PRIORITY = 3;
    
    function LogNotationObject(informationString, priority) {
        this.informationString = informationString || '';
        this.priority = priority || INFORMATION_PRIORITY;
        this.serialNumber = LogNotationObject.logNumber + 1;
        LogNotationObject.logNumber ++;
    }

    LogNotationObject.logNumber = 0;

    LogNotationObject.prototype.toString = function() {
        return ['Notation',
            this.serialNumber,
            ':',
            this.informationString,
            'With priority',
            this.priority,
            'Date:',
            new Date().toString()
        ].join(' ').toString();
    };

    return {
        LogNotationObject: LogNotationObject
    };
});
