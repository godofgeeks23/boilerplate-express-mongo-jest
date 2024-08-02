const Sample = require("../models/sample.model");

const getProducts = async (req, res) => {
  try {
    const products = await Sample.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getProduct = async (req, res) => {
  try {
    const product = await Sample.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It creates a new product using the data from the request body and returns the created product in the
 * response.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const createProduct = async (req, res) => {
  try {
    const product = await Sample.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It takes the id of the product to be updated from the request params, and the updated product data
 * from the request body, and then updates the product in the database with the new data, and returns
 * the updated product to the client.
 * @param req - The request object.
 * @param res - The response object.
 */
const updateProduct = async (req, res) => {
  try {
    const product = await Sample.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * It finds a product by its id and deletes it.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
const deleteProduct = async (req, res) => {
  try {
    const product = await Sample.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
