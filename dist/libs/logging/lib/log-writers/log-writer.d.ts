import { ILogEntry } from '../i-log-entry';
import { ILogWriter } from './i-log-writer';
export declare abstract class LogWriter implements ILogWriter {
    hasWriter: boolean;
    targetEntry: ILogEntry;
    /**
     * Use this method to execute the write process for the
     * specified [Log Entry] item.
     *
     * Using the [template method] design pattern.
     */
    execute(): void;
    /**
     * Use to perform an setup or configuration of the [writer].
     * The [setup] method runs on all executions of the writer - and
     * is called before the [write] method.
     */
    abstract setup(): void;
    /**
     * Use to validate the [log entry] before attempting to write
     * using the specified [log writer].
     *
     * Returns a [false] boolean to indicate the item is not valid.
     */
    validateEntry(): boolean;
    /**
     * Use to implement the actual write of the [Log Entry].
     */
    abstract write(): void;
    /**
     * Use to finish the process or clean-up any resources.
     */
    finish(): void;
}
