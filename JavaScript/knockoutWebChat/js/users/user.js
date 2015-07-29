/**
 * Created by anton.pashkouski on 29.07.2015.
 */
define(function(){
    function User(name, surname, login) {
        this.name = name;
        this.surname = surname;
        this.login = login;
    }

    return User;
});