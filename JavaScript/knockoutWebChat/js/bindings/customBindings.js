/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'jquery', 'jquery-ui'], function(ko, $, ui){

    ko.bindingHandlers.showOnSecond = {
        init: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();
            $(element).toggle(shouldDisplay);
        },
        update: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();

            if (shouldDisplay) {
                $(element).fadeIn();
                setTimeout(function(){ $(element).fadeOut(); }, 2000);
            }
        }
    };

    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();
            $(element).toggle(shouldDisplay);
        },
        update: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();

            if (shouldDisplay) {
                $(element).fadeIn();
            } else {
                $(element).fadeOut();
            }
        }
    };

    ko.bindingHandlers.accordion = {
        init: function(element, valueAccessor) {
            $(element).accordion();
        }
    };
});