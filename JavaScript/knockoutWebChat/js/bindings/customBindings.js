/**
 * Created by anton.pashkouski on 30.07.2015.
 */
define(['knockout', 'jquery'], function(ko, $){

    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();
            $(element).toggle(shouldDisplay);
        },
        update: function(element, valueAccessor) {
            var shouldDisplay = valueAccessor();

            if (shouldDisplay) {
                $(element).fadeIn();
                setTimeout(function(){ $(element).fadeOut(); }, 1000);
            }
        }
    };
});