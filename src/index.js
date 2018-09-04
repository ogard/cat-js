// @flow

export const revert = (x: string): string =>
  [...x]
    .reduce(
      (acc, y, i) => {
        acc[x.length - 1 - i] = y
        return acc
      },
      [...Array(x.length)],
    )
    .join('')
