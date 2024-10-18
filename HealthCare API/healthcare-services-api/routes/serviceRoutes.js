const express = require('express');
const { addService, getAllServices, updateService, deleteService, getServiceById } = require('../controllers/serviceController');

const router = express.Router();

// Route for adding a new service
router.post('/', addService);

// Route for getting all services
router.get('/', getAllServices);

// Route for getting a service by ID
router.get('/:id', getServiceById)

// Route for updating a service by ID
router.put('/:id', updateService);

// Route for deleting a service by ID
router.delete('/:id', deleteService);

module.exports = router;
