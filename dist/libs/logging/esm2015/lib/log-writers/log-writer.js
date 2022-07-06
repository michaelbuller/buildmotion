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
//# sourceMappingURL=log-writer.js.map