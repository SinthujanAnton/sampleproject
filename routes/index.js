const { Router } = require('express');
const controllerAppointment = require('../controllers/appointment');
const controllerUser = require('../controllers/index');
const controlleruserFindAll = require('../controllers/userFindAll');

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/usersDetail',controlleruserFindAll.FindUser)

router.post('/users',controllerUser.createUser)
router.post('/appointments', controllerAppointment.createAppointment)

module.exports = router
