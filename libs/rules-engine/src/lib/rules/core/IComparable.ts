
import { Primitive } from "./Primitive";

export interface IComparable<T> {
  compareTo(other: T): number;
}

export declare type Comparable = Primitive | IComparable<any>;

export default IComparable;
