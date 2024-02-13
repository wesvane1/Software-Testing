const express = require('express');
const { birthdayValidation } = require('../validation.js')
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', birthdayValidation, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
