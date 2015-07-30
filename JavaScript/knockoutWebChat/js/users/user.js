/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(function(){
    function User(name, surname, login, photo) {
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.photo = photo || 'img/default.jpg';
    }

    return User;
});