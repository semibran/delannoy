const choose = require('choose')

module.exports = function delannoy(m, n) {
  for (var r = 0, k = 0, l = Math.min(m, n); k <= l; k++) {
    r += choose(m + n - k, m) * choose(m, k)
  }
  return r
}
