const express = require('express')
const app = express()
const { transpile } = require('postman2openapi')

app.use(express.json())

app.post('/', (req, res) => {
  try {
    const collection = JSON.stringify(req.body)
    const openapi = transpile(collection, 'yaml')

    res.send(openapi)
  } catch (e) {
    res.send('Something went wrong!')
  }
})

app.listen(3000, () => console.log(`Running!`))
