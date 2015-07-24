/**
 * Created by anton.pashkouski on 24.07.2015.
 */
$(document).ready($().initializeBasket);

$().setBuyCallbackToBasket(function(json){
    alert(json);
});
