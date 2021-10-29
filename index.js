const { transpile } = require('postman2openapi')

exports.handler = async function (event) {
  const openapi = transpile(event.body, 'yaml')

  const response = {
    statusCode: 200, 
    body: openapi
  }

  return response
}
