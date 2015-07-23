/**
 * Created by anton.pashkouski on 23.07.2015.
 */
$(document).ready( function(){
    'use strict';

    var productsInBasket = [];
    var $basketList = $('.basket-list');

    var incrementProductsCount = function(indexInList) {
        var $productCountElement = $basketList.find('#range-' + indexInList);
        var productCountValue = $productCountElement.val();
        +productCountValue ++;
        $productCountElement.val(productCountValue);
    };

    var changeProductCount = function() {

    };

    var addProductToBasket = function(productInformation) {
        for (var i = 0; i < productsInBasket.length; i++ ) {
            if (productsInBasket[i].productId === productInformation.productId) {
                incrementProductsCount(i);
                return;
            }
        }
        var newProductElement = Elements.createBasketListItem(productInformation, productsInBasket.length);
        newProductElement.find('.number').on('change', changeProductCount);

        $basketList.append(newProductElement);
        productsInBasket.push(productInformation);
    };

    var addProductHandler = function() {
        var $parent = $(this).parents('.product');
        var productInformation = {
            imageSource: $parent.children('.product-image').attr('src'),
            productName: $parent.find('.product-name').html(),
            productCost: $parent.find('.product-cost').html(),
            productId: $parent.attr('id')
        };

        addProductToBasket(productInformation);
    };

    var buyAll = function() {
        alert('buy all');
    };

    var clearBasket = function() {
        alert('clear all');
    };

    $('.product-add-button').on('click', addProductHandler);
    $('#buy-all').on('click', buyAll);
    $('#clear').on('click', clearBasket);
    $('.number').on('change', changeProductCount);
});