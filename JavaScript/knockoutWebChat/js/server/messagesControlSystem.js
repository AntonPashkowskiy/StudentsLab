/**
 * Created by Антон on 01.08.2015.
 */
define(
    ['message'],

    function(Message) {
        var messagesQueues = [];

        var getUniqueQueueId = function() {
            var maxId = -1;

            for (var i = 0; i < messagesQueues.length; i++) {
                if (messagesQueues[i].id > maxId) {
                    maxId = messagesQueues[i].id;
                }
            }
            return maxId + 1;
        };

        var getQueueIndexById = function(id) {
            for (var i = 0; i < messagesQueues.length; i++) {
                if (messagesQueues[i].id === id) {
                    return i;
                }
            }
            return -1;
        };

        var createMessagesQueue = function() {
            var messagesQueueId = getUniqueQueueId();

            messagesQueues.push({id: messagesQueueId, queue: []});
            return messagesQueueId;
        };

        var deleteMessagesQueue = function(messageQueueId) {
            var index = getQueueIndexById(messageQueueId);

            if (index !== -1) {
                messagesQueues.splice(index, 1);
                return true;
            }
            return false;
        };

        var addMessageToQueue = function(message, messageQueueId) {
            var index = getQueueIndexById(messageQueueId);

            if (index !== -1 && message instanceof Message) {
                messagesQueues[index].queue.push(message);
                return true;
            }
            return false;
        };

        var getAllMessagesFromQueue = function(messageQueueId) {
            var index = getQueueIndexById(messageQueueId);

            if (index !== -1) {
                return messagesQueues[index].queue.slice();
            }
        };

        var getLastMessagesFromQueue = function(messageQueueId, count) {
            var index = getQueueIndexById(messageQueueId);

            if (index !== -1) {
                var firstChainIndex = messagesQueues[index].queue.length - count;

                if (firstChainIndex >= 0) {
                    return messagesQueues[index].queue.slice(firstChainIndex);
                }
            }
        };

        return {
            createMessagesQueue: createMessagesQueue,
            deleteMessagesQueue: deleteMessagesQueue,
            addMessageToQueue: addMessageToQueue,
            getAllMessagesFromQueue: getAllMessagesFromQueue,
            getLastMessagesFromQueue: getLastMessagesFromQueue
        }
    }
);