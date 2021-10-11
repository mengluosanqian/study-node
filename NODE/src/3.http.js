const http = require('http')

http.createServer((request, response) => {
  let url = Request.url
  response.write(url)
  response.end()
})
