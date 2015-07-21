/**
 * Created by anton.pashkouski on 20.07.2015.
 */
Logger.log('Good job', 'Console', false);
Logger.log('Hello world', 'Console', false);
Logger.log('Some information.', 'Console', false);
window.onload = Logger.eventBinding.createBindingFunction(window.onload, 'Window is loaded');
Logger.showHistory();
throw Error();
