const { Router } = require('express');
const { indexAction, createAction, updateAction, deleteAction } = require('../controllers/user.controller');

const router = Router();

router.get('/', indexAction );
router.post('/', createAction);
router.put('/:id', updateAction);
router.delete('/', deleteAction);

module.exports = router;
