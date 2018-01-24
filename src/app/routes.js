import express from 'express'

const routes = express.Router()

routes
  .get('/', (req, res, next) => {
    res.render('index', {
      title: 'Home page',
      description: 'This is the home page description'
    })
  })
  .get('/about', (req, res, next) => {
    res.render('index', {
      title: 'About page',
      description: 'This is the About page description'
    })
  })

export default routes
