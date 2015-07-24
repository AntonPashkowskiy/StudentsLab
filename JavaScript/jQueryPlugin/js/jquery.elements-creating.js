/**
 * Created by anton.pashkouski on 23.07.2015.
 */
(function($){
    'use strict';

    var toReducedImagePath = function (imageSourcePath) {
        var separatedPath = imageSourcePath.split('.');
        separatedPath[0] += '_min';

        return separatedPath.join('.');
    };

    var createImageElement = function (imageSource) {
        return $('<img>')
            .addClass('basket-product-image')
            .attr({
                src: toReducedImagePath(imageSource),
                alt: 'no image'
            });
    };

    var createNameElement = function (name) {
        return $('<h1>')
            .addClass('basket-product-name')
            .html(name);
    };

    var createCostElement = function (cost) {
        return $('<p>')
            .addClass('basket-product-price')
            .html(cost);
    };

    var createProductAmountElement = function (productId) {
        var productsCountArea = $('<div>').addClass('basket-products-count');
        var numberOfProducts = $('<input/>')
            .addClass('counter')
            .attr({
                id: 'range-' + productId,
                type: 'number',
                value: '1',
                min: '0'
            });
        productsCountArea.append(numberOfProducts);

        return productsCountArea;
    };

    $.fn.createBasketListItem = function (productInformation, productId) {
        var basketListItem = $('<li>').addClass('basket-list-element');
        var image = createImageElement(productInformation.imageSource);
        var name = createNameElement(productInformation.productName);
        var cost = createCostElement(productInformation.productPrice);
        var amount = createProductAmountElement(productId);

        basketListItem.append(image);
        basketListItem.append(name);
        basketListItem.append(cost);
        basketListItem.append(amount);

        return basketListItem;
    };
})(jQuery);