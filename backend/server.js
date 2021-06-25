
const app = require('./src/config/expressConfig.js')
const port = 3000
app.listen(port, () => {

    console.log(`listen to port ${port}`)
})