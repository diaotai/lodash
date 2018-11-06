import isFlattenable from './isFlattenable.js'

/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  // 这种处理默认值的方式没见过 
  predicate || (predicate = isFlattenable)
  result || (result = [])

  if (array == null) {
    return result
  }


  // 递归处理用一个 参数来代表已有结果是个很好的选择，最好这个已有的参数是一个引用类型
  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      } else {
        result.push(...value)
      }
    } else if (!isStrict) {
      // 这种做法的性能比push高吗？
      result[result.length] = value
    }
  }
  return result
}

export default baseFlatten
