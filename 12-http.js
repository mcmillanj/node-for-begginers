const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page')
    return;
  }
  if (req.url === '/about') {
    res.end('here is our short history')
    return;
  }
  res.end(`<h1>opps opps</h1>,
    <p>'we cant seem to find the page you looking for' </p>
  ,<a href='/'>back home</a>`)
  // res.write('welcome to our homepage')
  // res.end
})
server.listen(5000,()=>console.log('server listen on port 5000'))