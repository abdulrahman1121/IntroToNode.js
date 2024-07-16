const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());

class logger extends EventEmitter {
    log(message) {
        // Call event
        this.emit('message', {id: uuid.v4(), message});
    }
}

const logger = new Logger();

logger.on('message', (data) => console.log("Called Listener", data));

logger.log("Hello World")