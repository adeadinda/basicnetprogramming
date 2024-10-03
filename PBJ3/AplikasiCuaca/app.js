const request = require('postman-request')
const url ='https://api.weatherstack.com/current?access_key=3f6465db54ea1f9f640b12cd13ed0f52&query=-0.897054758763557,%20100.3507328953273'
request({ url: url }, (error, response) => {
// console.log(response)
 const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
 console.log(data.current.temperature)
})