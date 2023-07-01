const express = require('express')
const appRoute = require('./routers/app.router.js')

const app = express()
app.use(express.json())

app.use('/api', appRoute.router)
app.listen(8080, () => console.log('Server Up!'))