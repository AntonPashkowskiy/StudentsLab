/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(
    function() {
        'use strict';

        function User(firstName, lastName, login, photo) {
            this.userFirstName = firstName;
            this.userLastName = lastName;
            this.userLogin = login;
            this.userPhoto = photo || 'img/default.jpg';
        }

        return User;
    }
);