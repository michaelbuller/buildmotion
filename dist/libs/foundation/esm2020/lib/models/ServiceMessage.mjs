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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZU1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2ZvdW5kYXRpb24vc3JjL2xpYi9tb2RlbHMvU2VydmljZU1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1Qzs7R0FFRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBa0N6Qjs7Ozs7OztPQU9HO0lBQ0gsWUFBWSxJQUFZLEVBQUUsT0FBZSxFQUFFLFdBQXlCLEVBQUUsTUFBZSxFQUFFLGFBQWEsR0FBRyxLQUFLO1FBbkM1RyxzQkFBc0I7UUFDdEIsZ0JBQVcsR0FBZ0IsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUVuRCxpREFBaUQ7UUFDakQsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLGdGQUFnRjtRQUNoRixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQTZCcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQTBCLENBQUM7U0FDL0M7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBZ0IsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsV0FBd0I7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsYUFBc0I7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLGNBQWMsSUFBSSxDQUFDLE9BQU8sa0JBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGFBQWEsSUFBSSxDQUFDLE1BQU0sb0JBQW9CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuSyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4vTWVzc2FnZVR5cGUnO1xuXG4vKipcbiAqIFVzZSB0aGlzIGNsYXNzIHRvIGNyZWF0ZSBhIG1lc3NhZ2UgZm9yIHRoZSBjdXJyZW50IFtTZXJ2aWNlQ29udGV4dF0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlTWVzc2FnZSB7XG4gIC8qKiBVc2UgdG8gc3BlY2lmeSB0aGUgbmFtZSBvZiB0aGUgbWVzc2FnZS4gKi9cbiAgTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBVc2UgdG8gc3BlY2lmeSB0aGUgbWVzc2FnZS4gKi9cbiAgTWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKiBVc2UgdG8gc3BlY2lmeSAgKi9cbiAgTWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuSW5mb3JtYXRpb247XG5cbiAgLyoqIFVzZSB0byBpbmRpY2F0ZSB0aGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLiAqL1xuICBTb3VyY2UgPSAnJztcblxuICAvKiogVXNlIHRvIGluZGljYXRlIGlmIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSBzaG91bGQgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyLiAqL1xuICBEaXNwbGF5VG9Vc2VyID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIFtTZXJ2aWNlTWVzc2FnZV0uXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgZGlzcGxheSB0ZXh0IG9mIHRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZVR5cGU6IEluZGljYXRlcyB0aGUgdHlwZSBvZiBtZXNzYWdlLlxuICAgKiBAcGFyYW0gc291cmNlOiBJbmRpY2F0ZXMgdGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIGRpc3BsYXlUb1VzZXI6IEluZGljYXRlcyBpZiB0aGUgbWVzc2FnZSBpcyBkaXNwbGF5YWJsZS5cbiAgICovXG5cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBtZXNzYWdlVHlwZT86IE1lc3NhZ2VUeXBlLCBzb3VyY2U/OiBzdHJpbmcpO1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgW1NlcnZpY2VNZXNzYWdlXS5cbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBkaXNwbGF5IHRleHQgb2YgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBtZXNzYWdlVHlwZTogSW5kaWNhdGVzIHRoZSB0eXBlIG9mIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBzb3VyY2U6IEluZGljYXRlcyB0aGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIG1lc3NhZ2VUeXBlPzogTWVzc2FnZVR5cGUsIHNvdXJjZT86IHN0cmluZyk7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIGRpc3BsYXkgdGV4dCBvZiB0aGUgbWVzc2FnZS5cbiAgICogQHBhcmFtIG1lc3NhZ2VUeXBlOiBJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgbWVzc2FnZS5cbiAgICogQHBhcmFtIHNvdXJjZTogSW5kaWNhdGVzIHRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBkaXNwbGF5VG9Vc2VyIFVzZSB0byBpbmRpY2F0ZSBpZiB0aGUgc3BlY2lmaWVkIG1lc3NhZ2Ugc2hvdWxkIGJlIGRpc3BsYXllZCB0byB0aGUgdXNlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBtZXNzYWdlVHlwZT86IE1lc3NhZ2VUeXBlLCBzb3VyY2U/OiBzdHJpbmcsIGRpc3BsYXlUb1VzZXIgPSBmYWxzZSkge1xuICAgIHRoaXMuTmFtZSA9IG5hbWU7XG4gICAgdGhpcy5NZXNzYWdlID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgdGhpcy5NZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlIGFzIE1lc3NhZ2VUeXBlO1xuICAgIH1cbiAgICBpZiAoc291cmNlKSB7XG4gICAgICB0aGlzLlNvdXJjZSA9IHNvdXJjZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuRGlzcGxheVRvVXNlciA9IGRpc3BsYXlUb1VzZXI7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZXh0ZW5zaW9uIG1ldGhvZCB0byBhZGQgdGhlIG5hbWUgb2YgdGhlIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIG1lc3NhZ2UuXG4gICAqL1xuICBXaXRoTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLk5hbWUgPSBuYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGV4dGVuc2lvbiBtZXRob2QgdG8gYWRkIHRoZSBtZXNzYWdlIHRleHQgdG8gdGhlIFNlcnZpY2VNZXNzYWdlIGl0ZW0uXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBkaXNwbGF5IHRleHQgb2YgdGhlIHNlcnZpY2UgbWVzc2FnZS5cbiAgICovXG4gIFdpdGhNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZXh0ZW5zaW9uIG1ldGhvZCB0byBzZXQgdGhlIFtNZXNzYWdlVHlwZV0gb2YgdGhlIFNlcnZpY2VNZXNzYWdlIGl0ZW0uXG4gICAqIEBwYXJhbSBtZXNzYWdlVHlwZTogVXNlIHRvIGluZGljYXRlIHRoZSBtZXNzYWdlIHR5cGUuXG4gICAqL1xuICBXaXRoTWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gICAgdGhpcy5NZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGV4dGVuc2lvbiBtZXRob2QgdG8gc2V0IHRoZSBbU291cmNlXSBvZiB0aGUgU2VydmljZU1lc3NhZ2UgaXRlbS5cbiAgICogQHBhcmFtIHNvdXJjZTogVXNlIHRvIGluZGljYXRlIHRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBXaXRoU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5Tb3VyY2UgPSBzb3VyY2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZXh0ZW5zaW9uIG1ldGhvZCB0byBzZXQgdGhlIFtEaXNwbGF5VG9Vc2VyXSBpbmRpY2F0b3Igb2YgdGhlIFNlcnZpY2VNZXNzYWdlLlxuICAgKiBAcGFyYW0gZGlzcGxheVRvVXNlcjogQSBib29sZWFuIHZhbHVlIHRvIGluZGljYXRlIGlmIHRoZSBtZXNzYWdlIGNhbiBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuXG4gICAqL1xuICBXaXRoRGlzcGxheVRvVXNlcihkaXNwbGF5VG9Vc2VyOiBib29sZWFuKSB7XG4gICAgdGhpcy5EaXNwbGF5VG9Vc2VyID0gZGlzcGxheVRvVXNlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgcmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgU2VydmljZU1lc3NhZ2UuXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYE5hbWU6ICR7dGhpcy5OYW1lfTsgTWVzc2FnZTogJHt0aGlzLk1lc3NhZ2V9OyBNZXNzYWdlVHlwZTogJHt0aGlzLk1lc3NhZ2VUeXBlLnRvU3RyaW5nKCl9OyBTb3VyY2U6ICR7dGhpcy5Tb3VyY2V9OyBEaXNwbGF5VG9Vc2VyOiAke3RoaXMuRGlzcGxheVRvVXNlcn1gO1xuICB9XG59XG4iXX0=