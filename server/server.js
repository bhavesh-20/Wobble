const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const app = express()
const morgan = require('morgan')

// Connect to MongoDB
connectDB()

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
swaggerDocument = YAML.load('./swagger.yaml')

// Initialize middleware
app.use(express.json())
app.use(morgan('dev'))

// Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Define routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/users', require('./routes/api/users'))

// Serve static assets in production
app.use(express.static('./build'))
console.log(__dirname)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`))
module.exports = app;