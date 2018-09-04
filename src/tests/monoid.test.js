// @flow

import * as Monoid from '../instances/monoid'

// test('Monoid instances to pass rules of identity, composition, associativity', () => {
//   Object.keys(Monoid).forEach(key => {
//     console.log(Monoid)
//     // identity law:
//     expect(
//       // Monoid[key].compose(
//       //   5,
//       //   Monoid[key].identity,
//       // ) ==
//       //   Monoid[key].compose(
//       //     Monoid[key].identity,
//       //     4,
//       //   ),
//       false,
//     ).toBe(true)
//   })
// })

test('Monoid instances to pass identity law', () => {
  const SumMonoid = new Monoid.Sum()
  const MultiplyMonoid = new Monoid.Multiply()
  const ConcatMonoid = new Monoid.Concat()
  expect(
    SumMonoid.compose(
      5,
      SumMonoid.identity,
    ) ===
      SumMonoid.compose(
        SumMonoid.identity,
        5,
      ),
  ).toBe(true)
  expect(
    MultiplyMonoid.compose(
      5,
      MultiplyMonoid.identity,
    ) ===
      MultiplyMonoid.compose(
        MultiplyMonoid.identity,
        5,
      ),
  ).toBe(true)
  expect(
    ConcatMonoid.compose(
      'TestString',
      ConcatMonoid.identity,
    ) ===
      ConcatMonoid.compose(
        ConcatMonoid.identity,
        'TestString',
      ),
  ).toBe(true)
})
