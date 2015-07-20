/**
 * Created by anton.pashkouski on 17.07.2015.
 */
Logger.entities.LogEntryObject = (function() {
    'use strict';

    function LogEntryObject(informationString, priority) {
        this.informationString = informationString || '';
        this.priority = priority || 0;
        this.serialNumber = LogEntryObject.logNumber + 1;
        LogEntryObject.logNumber ++;
    }

    LogEntryObject.logNumber = 0;

    LogEntryObject.prototype.toString = function() {
        return ['Entry',
            this.serialNumber,
            ':',
            this.informationString,
            'With priority',
            this.priority,
            'Date:',
            new Date().toString()
        ].join(' ').toString();
    };

    return LogEntryObject;
})();
