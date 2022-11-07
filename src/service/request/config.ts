let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org'
} else {
  BASE_URL = 'http://httpbin.org'
}

export { TIME_OUT, BASE_URL }