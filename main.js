const coin_types = [500, 100, 50, 10]
let n = 1260
let count = 0

for (const coin of coin_types) {
  count += Math.floor(n/coin)
  n %= coin
}
console.log(count) // 6