export interface ArrayLikeWritable<T> {
  length: number;
  [n: number]: T;
}

export default ArrayLikeWritable;
