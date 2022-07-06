import { AlertTypes } from './alert-types.constants';
export class AlertNotification {
    constructor(header, title, messages, type) {
        this.type = AlertTypes.Information; // alert-warning, alert-success, alert-info, alert-danger
        this.messages = new Array();
        this.showAlert = false;
        if (type) {
            this.type = type;
        }
        this.header = header;
        this.title = title;
        if (messages) {
            this.messages = messages;
        }
        if (this.header && this.title) {
            this.showAlert = true; // used to trigger the display of the notification.
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9mb3VuZGF0aW9uL3NyYy9saWIvbW9kZWxzL2FsZXJ0LW5vdGlmaWNhdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsTUFBTSxPQUFPLGlCQUFpQjtJQU81QixZQUFZLE1BQWMsRUFBRSxLQUFhLEVBQUUsUUFBd0IsRUFBRSxJQUFhO1FBTmxGLFNBQUksR0FBVyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMseURBQXlEO1FBR2hHLGFBQVEsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUM5QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR2hCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxtREFBbUQ7U0FDM0U7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGVydFR5cGVzIH0gZnJvbSAnLi9hbGVydC10eXBlcy5jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgQWxlcnROb3RpZmljYXRpb24ge1xuICB0eXBlOiBzdHJpbmcgPSBBbGVydFR5cGVzLkluZm9ybWF0aW9uOyAvLyBhbGVydC13YXJuaW5nLCBhbGVydC1zdWNjZXNzLCBhbGVydC1pbmZvLCBhbGVydC1kYW5nZXJcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgc2hvd0FsZXJ0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoaGVhZGVyOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2VzPzogQXJyYXk8c3RyaW5nPiwgdHlwZT86IHN0cmluZykge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oZWFkZXIgJiYgdGhpcy50aXRsZSkge1xuICAgICAgdGhpcy5zaG93QWxlcnQgPSB0cnVlOyAvLyB1c2VkIHRvIHRyaWdnZXIgdGhlIGRpc3BsYXkgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICB9XG4gIH1cbn1cbiJdfQ==