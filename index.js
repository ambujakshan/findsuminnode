const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/findsum', (req, res) => {

    let n1= parseInt(req.query.n1);
    let n2=parseInt(req.query.n2);
let sum=n1+n2
    res.send('IMPLEMED!'+sum)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})