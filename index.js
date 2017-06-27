const factorial = require('factorial')

module.exports = function delannoy(m, n) {
  var r = 0
  var l = Math.min(m, n)
  for (var k = 0; k <= l; k++) {
    r += factorial(m + n - k) / (factorial(k) * factorial(m - k) * factorial(n - k))
  }
  return r
}
