const print = require('./led-print')

for (let i = 0; i < 25; i++) {
  console.log(print(6, 'hi bye', i))
}
