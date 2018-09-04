// @flow

/**
 * RULES:
 * identity: n o id == id o n == n
 * composition: x o y
 * associativity: x o (y o z) == (x o y) o z
 * ---
 * Monoid is category with 1 object
 */
export interface Monoid<T> {
  compose: (T, T) => T;
  +identity: T;
}
