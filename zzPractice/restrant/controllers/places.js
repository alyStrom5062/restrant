// SHOW INDEX
const router = require('express').Router()
const places = require('../models/places.js')
 
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// CREATE Form
router.get('/new', (req, res) => {
    res.render('places/new')
})

// CREATE Post
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic){
        // Default image is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = "Springfield"
    }
    if (!req.body.state) {
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})

// EDIT Form
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    } else {
    res.render('places/edit', { places: places[id] })
    }
})

// PUT Edit
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        // Validated req.body data
            if (!req.body.pic) {
                req.body.pic = 'http://placekitten.com/400/400'
            }
            if (!req.body.city){
                req.body.city = "Anytown"
            }
            if (!req.body.state){
                req.body.state = "USA"
            }
    }
        places[id] = req.body
        res.redirect(`/places/${id}`)
    })

// DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]){
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})


// SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
  })

module.exports = router