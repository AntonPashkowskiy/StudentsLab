/**
 * Created by anton.pashkouski on 23.07.2015.
 */
(function($){
    'use strict';

    var buyCallback;

    $.fn.initializeBasket = function() {
        var productsList = [];
        var $basketList = $('.basket-list');
        var $totalCostElement = $('.basket-total-cost');

        var incrementProductAmount = function(productId, indexInList) {
            productsList[indexInList].productAmount ++;
            var $counterElement = $basketList.find('#range-' + productId);
            $counterElement.val(productsList[indexInList].productAmount);
            $counterElement.trigger('change');
        };

        var addNewElement = function(productInformation) {
            var newProductElement = $().createBasketListItem(productInformation, productInformation.productId);
            var $counterElement = newProductElement.find('.counter');
            $counterElement.on('change', changeProductAmountHandler);

            $basketList.append(newProductElement);
            productsList.push(productInformation);
            $counterElement.trigger('change');
        };

        // #range-productId -> productId -> index
        var getIndexById = function(id) {
            var productId = id.split('-').slice(1).join('-');

            for (var i = 0; i < productsList.length; i++) {
                if(productId === productsList[i].productId) {
                    return i;
                }
            }
        };

        var removeProductFromBasket = function(basketListElement) {
            var counterElementId = basketListElement.find('.counter').attr('id');
            var elementIndex = getIndexById(counterElementId);

            productsList.splice(elementIndex, 1);
            basketListElement.remove();
        };

        var calculateNewProductPrice = function(productAmountElement) {
            var productAmountElementId = productAmountElement.attr('id');
            var elementIndex = getIndexById(productAmountElementId);

            productsList[elementIndex].productAmount = productAmountElement.val();
            return +productsList[elementIndex].productPrice * productsList[elementIndex].productAmount;
        };

        var setProductPrice = function(basketListElement, newProductPrice) {
            basketListElement.find('.basket-product-price').html(newProductPrice)
        };

        var recalculateTotalCost = function() {
            var newTotalCost = 0;

            for (var i = 0; i < productsList.length; i++) {
                newTotalCost += productsList[i].productAmount * productsList[i].productPrice;
            }

            $totalCostElement.html(newTotalCost);
        };

        var changeProductAmountHandler = function() {
            var $productAmountElement = $(this);
            var $basketListElement = $productAmountElement.parents('.basket-list-element');
            var productAmount = +$productAmountElement.val();

            if (productAmount <= 0) {
                removeProductFromBasket($basketListElement);
            } else {
                var newProductPrice = calculateNewProductPrice($productAmountElement);
                setProductPrice($basketListElement, newProductPrice);
            }

            recalculateTotalCost();
        };

        var addProductToBasket = function(productInformation) {
            for (var i = 0; i < productsList.length; i++ ) {
                if (productsList[i].productId === productInformation.productId) {
                    incrementProductAmount(productInformation.productId, i);
                    return;
                }
            }
            addNewElement(productInformation);
        };

        var addProductHandler = function() {
            var $parent = $(this).parents('.product');
            var productInformation = {
                imageSource: $parent.children('.product-image').attr('src'),
                productName: $parent.find('.product-name').html(),
                productPrice: $parent.find('.product-cost').html(),
                productId: $parent.attr('id'),
                productAmount: 1
            };

            addProductToBasket(productInformation);
        };

        var buyAll = function() {
            var jsonString = JSON.stringify(productsList, ' ');

            if(buyCallback) {
                buyCallback(jsonString);
            }
        };

        var clearBasket = function() {
            productsList.splice(0);
            $basketList.children().remove();
            recalculateTotalCost();
        };

        $('.product-add-button').on('click', addProductHandler);
        $('#buy-all').on('click', buyAll);
        $('#clear').on('click', clearBasket);
        $('.number').on('change', changeProductAmountHandler);
    };

    $.fn.setBuyCallbackToBasket = function(buy) {
        if (typeof buy === 'function') {
            buyCallback = buy;
        }
    };
})(jQuery);

