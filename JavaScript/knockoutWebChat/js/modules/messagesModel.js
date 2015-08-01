/**
 * Created by anton.pashkouski on 31.07.2015.
 */
define(['knockout'], function(ko){
    'use strict';

    function MessagesModel() {
        var self = this;

        self.message = ko.observable('');
        self.messages = ko.observableArray([
            {
                photo: 'img/buzuma.alexei.jpg',
                senderName: 'Alexei Buzuma',
                messageText: 'some message: sdkfjldsfjdlkfjsldjfsdlkfjsldkjfsldkfjsldkfjsldkfjsldkjflkjdsf'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            },
            {
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: 'sdl;kflsdkflskdfmlsdkmflskdmfsldkmfdslfkmsdfsdfsdfsl;kdfmsdlfkmsldfkmsldkmflsdkfm'
            }
        ]);
        self.recipients = ko.observableArray(['karl', 'strange user', 'leha']);

        self.send = function() {
            self.messages.push({
                photo: 'img/Zajakun.jpg',
                senderName: 'Urii Zaycev',
                messageText: self.message()
            });
            self.message('');
        }
    }

    return MessagesModel;
});