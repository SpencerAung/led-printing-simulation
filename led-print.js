/**
 * Simulate LED display
 * @param {number} n - the number of characters to be displayed
 * @param {string} text - the text to display
 * @param {number} second - time in second to display the text
 *
 * @return {string} A string to show on LED display at a given second
 */
const print = (n, text, second) => {
  const length = text.length + n

  if (second < length) {
    const blanks = '_'.repeat(n)
    const arr = (blanks + text.replace(' ', '_')).split('')

    const first = arr.slice(0, second)
    const last = arr.slice(second)

    return [...last, ...first].slice(0, n).join('')
  }

  return print(n, text, second - length)
}

module.exports = print
