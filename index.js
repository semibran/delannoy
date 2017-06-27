const choose = require('choose')

module.exports = function delannoy(m, n) {
  var r = 0
  var l = Math.min(m, n)
  for (var k = 0; k <= l; k++) {
    r += choose(m + n - k, m) * choose(m, k)
  }
  return r
}
