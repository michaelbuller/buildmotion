import { IsNotNullOrUndefined, IsTrue, StringIsNotNullEmptyRange, ValidationContext } from '@buildmotion/rules-engine';
import { noop } from 'rxjs';
export class LogWriter {
    /**
     * Use this method to execute the write process for the
     * specified [Log Entry] item.
     *
     * Using the [template method] design pattern.
     */
    execute() {
        this.setup();
        if (this.validateEntry()) {
            this.write();
        }
        this.finish();
    }
    /**
     * Use to validate the [log entry] before attempting to write
     * using the specified [log writer].
     *
     * Returns a [false] boolean to indicate the item is not valid.
     */
    validateEntry() {
        const validationContext = new ValidationContext();
        validationContext.addRule(new IsTrue('LogWriterExists', 'The log writer is not configured.', this.hasWriter));
        validationContext.addRule(new IsNotNullOrUndefined('EntryIsNotNull', 'The entry cannot be null.', this.targetEntry));
        validationContext.addRule(new StringIsNotNullEmptyRange('SourceIsRequired', 'The entry source is not valid.', this.targetEntry.source, 1, 100));
        validationContext.addRule(new StringIsNotNullEmptyRange('MessageIsValid', 'The message is required for the [Log Entry].', this.targetEntry.message, 1, 2000));
        validationContext.addRule(new IsNotNullOrUndefined('TimestampIsRequired', 'The timestamp must be a valid DateTime value.', this.targetEntry.timestamp));
        return validationContext.renderRules().isValid;
    }
    /**
     * Use to finish the process or clean-up any resources.
     */
    finish() {
        noop();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLXdyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbG9nZ2luZy9zcmMvbGliL2xvZy13cml0ZXJzL2xvZy13cml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJNUIsTUFBTSxPQUFnQixTQUFTO0lBSTdCOzs7OztPQUtHO0lBQ0gsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFTRDs7Ozs7T0FLRztJQUNJLGFBQWE7UUFDbEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDbEQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLGlCQUFpQixFQUFFLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzlHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3JILGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLGtCQUFrQixFQUFFLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hKLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLHlCQUF5QixDQUFDLGdCQUFnQixFQUFFLDhDQUE4QyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlKLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFLCtDQUErQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV4SixPQUFPLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBT0Q7O09BRUc7SUFDSSxNQUFNO1FBQ1gsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdE51bGxPclVuZGVmaW5lZCwgSXNUcnVlLCBTdHJpbmdJc05vdE51bGxFbXB0eVJhbmdlLCBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gJ0BidWlsZG1vdGlvbi9ydWxlcy1lbmdpbmUnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUxvZ0VudHJ5IH0gZnJvbSAnLi4vaS1sb2ctZW50cnknO1xuaW1wb3J0IHsgSUxvZ1dyaXRlciB9IGZyb20gJy4vaS1sb2ctd3JpdGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ1dyaXRlciBpbXBsZW1lbnRzIElMb2dXcml0ZXIge1xuICBoYXNXcml0ZXIhOiBib29sZWFuO1xuICB0YXJnZXRFbnRyeSE6IElMb2dFbnRyeTtcblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIGV4ZWN1dGUgdGhlIHdyaXRlIHByb2Nlc3MgZm9yIHRoZVxuICAgKiBzcGVjaWZpZWQgW0xvZyBFbnRyeV0gaXRlbS5cbiAgICpcbiAgICogVXNpbmcgdGhlIFt0ZW1wbGF0ZSBtZXRob2RdIGRlc2lnbiBwYXR0ZXJuLlxuICAgKi9cbiAgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgaWYgKHRoaXMudmFsaWRhdGVFbnRyeSgpKSB7XG4gICAgICB0aGlzLndyaXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmluaXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHBlcmZvcm0gYW4gc2V0dXAgb3IgY29uZmlndXJhdGlvbiBvZiB0aGUgW3dyaXRlcl0uXG4gICAqIFRoZSBbc2V0dXBdIG1ldGhvZCBydW5zIG9uIGFsbCBleGVjdXRpb25zIG9mIHRoZSB3cml0ZXIgLSBhbmRcbiAgICogaXMgY2FsbGVkIGJlZm9yZSB0aGUgW3dyaXRlXSBtZXRob2QuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3Qgc2V0dXAoKTogdm9pZDtcblxuICAvKipcbiAgICogVXNlIHRvIHZhbGlkYXRlIHRoZSBbbG9nIGVudHJ5XSBiZWZvcmUgYXR0ZW1wdGluZyB0byB3cml0ZVxuICAgKiB1c2luZyB0aGUgc3BlY2lmaWVkIFtsb2cgd3JpdGVyXS5cbiAgICpcbiAgICogUmV0dXJucyBhIFtmYWxzZV0gYm9vbGVhbiB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpcyBub3QgdmFsaWQuXG4gICAqL1xuICBwdWJsaWMgdmFsaWRhdGVFbnRyeSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29udGV4dCA9IG5ldyBWYWxpZGF0aW9uQ29udGV4dCgpO1xuICAgIHZhbGlkYXRpb25Db250ZXh0LmFkZFJ1bGUobmV3IElzVHJ1ZSgnTG9nV3JpdGVyRXhpc3RzJywgJ1RoZSBsb2cgd3JpdGVyIGlzIG5vdCBjb25maWd1cmVkLicsIHRoaXMuaGFzV3JpdGVyKSk7XG4gICAgdmFsaWRhdGlvbkNvbnRleHQuYWRkUnVsZShuZXcgSXNOb3ROdWxsT3JVbmRlZmluZWQoJ0VudHJ5SXNOb3ROdWxsJywgJ1RoZSBlbnRyeSBjYW5ub3QgYmUgbnVsbC4nLCB0aGlzLnRhcmdldEVudHJ5KSk7XG4gICAgdmFsaWRhdGlvbkNvbnRleHQuYWRkUnVsZShuZXcgU3RyaW5nSXNOb3ROdWxsRW1wdHlSYW5nZSgnU291cmNlSXNSZXF1aXJlZCcsICdUaGUgZW50cnkgc291cmNlIGlzIG5vdCB2YWxpZC4nLCB0aGlzLnRhcmdldEVudHJ5LnNvdXJjZSwgMSwgMTAwKSk7XG4gICAgdmFsaWRhdGlvbkNvbnRleHQuYWRkUnVsZShuZXcgU3RyaW5nSXNOb3ROdWxsRW1wdHlSYW5nZSgnTWVzc2FnZUlzVmFsaWQnLCAnVGhlIG1lc3NhZ2UgaXMgcmVxdWlyZWQgZm9yIHRoZSBbTG9nIEVudHJ5XS4nLCB0aGlzLnRhcmdldEVudHJ5Lm1lc3NhZ2UsIDEsIDIwMDApKTtcbiAgICB2YWxpZGF0aW9uQ29udGV4dC5hZGRSdWxlKG5ldyBJc05vdE51bGxPclVuZGVmaW5lZCgnVGltZXN0YW1wSXNSZXF1aXJlZCcsICdUaGUgdGltZXN0YW1wIG11c3QgYmUgYSB2YWxpZCBEYXRlVGltZSB2YWx1ZS4nLCB0aGlzLnRhcmdldEVudHJ5LnRpbWVzdGFtcCkpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25Db250ZXh0LnJlbmRlclJ1bGVzKCkuaXNWYWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdG8gaW1wbGVtZW50IHRoZSBhY3R1YWwgd3JpdGUgb2YgdGhlIFtMb2cgRW50cnldLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHdyaXRlKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFVzZSB0byBmaW5pc2ggdGhlIHByb2Nlc3Mgb3IgY2xlYW4tdXAgYW55IHJlc291cmNlcy5cbiAgICovXG4gIHB1YmxpYyBmaW5pc2goKTogdm9pZCB7XG4gICAgbm9vcCgpO1xuICB9XG59XG4iXX0=