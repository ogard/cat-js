// @flow

import { revert } from '../index'

test('reverts mondo to odnom', () => {
  expect(revert('mondo')).toBe('odnom')
})
