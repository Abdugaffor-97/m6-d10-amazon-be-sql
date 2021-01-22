const { Router } = require("express");
const { Product } = require("../../models");

const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.send(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newPorduct = await Product.create(req.body);
      res.send(newPorduct);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      res.send(product);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      updatedProduct = await Product.update(req.body, {
        returning: true,
        plain: true,
        where: { id: req.params.id },
      });

      res.send(updatedProduct);
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      Product.destroy({ where: { id: req.params.id } }).then((info) => {
        if (info > 0) res.send("Deleted");
        else res.send("Not matched");
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
