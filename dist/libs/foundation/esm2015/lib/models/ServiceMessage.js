import { MessageType } from './MessageType';
/**
 * Use this class to create a message for the current [ServiceContext].
 */
export class ServiceMessage {
    /**
     *
     * @param name The name of the message.
     * @param message The display text of the message.
     * @param messageType: Indicates the type of message.
     * @param source: Indicates the source of the message.
     * @param displayToUser Use to indicate if the specified message should be displayed to the user.
     */
    constructor(name, message, messageType, source, displayToUser = false) {
        /** Use to specify  */
        this.MessageType = MessageType.Information;
        /** Use to indicate the source of the message. */
        this.Source = '';
        /** Use to indicate if the specified message should be displayed to the user. */
        this.DisplayToUser = false;
        this.Name = name;
        this.Message = message;
        if (message) {
            this.MessageType = messageType;
        }
        if (source) {
            this.Source = source;
        }
        this.DisplayToUser = displayToUser;
    }
    /**
     * Use this extension method to add the name of the message.
     * @param name The name of the service message.
     */
    WithName(name) {
        this.Name = name;
        return this;
    }
    /**
     * Use this extension method to add the message text to the ServiceMessage item.
     * @param message The display text of the service message.
     */
    WithMessage(message) {
        this.Message = message;
        return this;
    }
    /**
     * Use this extension method to set the [MessageType] of the ServiceMessage item.
     * @param messageType: Use to indicate the message type.
     */
    WithMessageType(messageType) {
        this.MessageType = messageType;
        return this;
    }
    /**
     * Use this extension method to set the [Source] of the ServiceMessage item.
     * @param source: Use to indicate the source of the message.
     */
    WithSource(source) {
        this.Source = source;
        return this;
    }
    /**
     * Use this extension method to set the [DisplayToUser] indicator of the ServiceMessage.
     * @param displayToUser: A boolean value to indicate if the message can be displayed to the user.
     */
    WithDisplayToUser(displayToUser) {
        this.DisplayToUser = displayToUser;
        return this;
    }
    /**
     * Use this method return a string representing the ServiceMessage.
     */
    toString() {
        return `Name: ${this.Name}; Message: ${this.Message}; MessageType: ${this.MessageType.toString()}; Source: ${this.Source}; DisplayToUser: ${this.DisplayToUser}`;
    }
}
//# sourceMappingURL=ServiceMessage.js.map