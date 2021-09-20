import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT || 8000

//middleware
app.use(helmet())
app.use(cors())
app.use(morgan())

// router to handle root request
app.use('/', (request, response) => {
  response.send('You have reached the end of the router')
})

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log(
    `\n----------------------------------------` +
      `\n SERVER running at http://localhost:${PORT}` +
      `\n----------------------------------------`
  )
})
