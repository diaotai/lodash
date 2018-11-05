import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size) {
  size = Math.max(size, 0)
  // 为本处取长度点赞，因为null 和 undefined 取值都会报错，本处做法很巧妙
  const length = array == null ? 0 : array.length
  // 对于不满足要求统一处理
  if (!length || size < 1) {
    return []
  }
  // 尽量推迟变量声明位置
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  // 为什么这么喜欢 while 。。。
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
