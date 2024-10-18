const Service = require('../models/serviceModel');

// Add a new service
const addService = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const service = new Service({ name, description, price });
    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Get a service by ID
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(service);
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}
// Update a service
const updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;

    const updatedService = await service.save();
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    await service.deleteOne();
    res.status(200).json({ message: 'Service removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
