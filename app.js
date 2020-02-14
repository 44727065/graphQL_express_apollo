const express = require('express')
const cors = require('cors')

const port = 8888 // 定义端口

const app = express()
app.use(cors()) // 允许跨域访问
app.use('/graphql')

app.listen(port, () => {
  console.log(`server running at ${port}`)
})
