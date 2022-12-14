/**
 * Use to indicate the severity if the rule is violated.
 */
export enum Severity {
  /**
   * Indicates the rule violation is an [Exception].
   */
  Exception = 'Exception',

  /**
   * Indicates the rule violation is an [Warning].
   */
  Warning = 'Warning',

  /**
   * Indicates the rule violation is an [Information].
   */
  Information = 'Information',
}
