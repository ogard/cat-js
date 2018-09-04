// @flow
import type { Monoid } from '../monoid'

export class Sum implements Monoid<number> {
  compose = (x: number, y: number) => x + y
  identity = 0
}

export class Multiply implements Monoid<number> {
  compose = (x: number, y: number) => x * y
  identity = 1
}

export class Concat implements Monoid<string> {
  compose = (x: string, y: string) => `${x}${y}`
  identity: ''
}

// module.exports = ({
//   sumMonoid: new Sum(),
//   mulMonoid: new Multiply(),
//   concatMonoid: new Concat(),
// }: { [key: string]: Monoid<*> })
