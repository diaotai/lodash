import baseFindIndex from './.internal/baseFindIndex.js'

/**
 * This method is like `findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user == 'pebbles')
 * // => 2
 */
function findLastIndex(array, predicate, fromIndex) {
  // 这个 length 处理真的很漂亮， 不过这个也是动态类型语言所带来的问题导致的
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  // 根据情况改变变量，而不是改变处理逻辑
  let index = length - 1
  if (fromIndex !== undefined) {
    index = fromIndex < 0
      ? Math.max(length + fromIndex, 0)
      : Math.min(fromIndex, length - 1)
  }
  return baseFindIndex(array, predicate, index, true)
}

export default findLastIndex
