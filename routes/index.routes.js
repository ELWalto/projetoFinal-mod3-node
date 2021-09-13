const express  = require("express");
const router = express.Router()
const controller = require('../controllers/index')

router.get('/',controller.get);

router.get('/:id',controller.getId);

router.post('/add',controller.post);

router.put('/edit/:id',controller.put);

router.delete('/delete/:id',controller.delete);

module.exports = router;