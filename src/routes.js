const express = require('express')
const routes = express.Router()
const basePath = __dirname + '/views/'

routes.get('/', (req, res) => {
  return res.render(basePath + 'index')
})

routes.get('/about', (req, res) => {
  return res.render(basePath + 'about')
})

routes.get('/contact', (req, res) => {
  return res.render(basePath + 'contact')
})

routes.get('/cakes', (req, res) => {
  return res.render(basePath + 'cakes')
})

routes.get('/cakes-orders', (req, res) => {
  return res.render(basePath + 'cakes-orders')
})

routes.get('/pizza', (req, res) => {
  return res.render(basePath + 'pizza')
})

routes.get('/savory', (req, res) => {
  return res.render(basePath + 'savory')
})

module.exports = routes
