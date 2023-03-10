const FastSpeedtest = require('fast-speedtest-api')

let speedtest = new FastSpeedtest({
  token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm',
  verbose: false, // default: false
  timeout: 10000, // default: 5000
  https: true, // default: true
  urlCount: 5, // default: 5
  bufferSize: 8, // default: 8
  unit: FastSpeedtest.UNITS.Mbps,
})

let speed = 0

speedtest
  .getSpeed()
  .then((s) => {
    speed = s
    console.log(`Speed: ${s} Mbps`)
  })
  .catch((e) => {
    console.error(e.message)
  })

return (
  speed
)
