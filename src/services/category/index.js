const { Router } = require("express");
const { Category } = require("../../models");

const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const category = await Category.findAll();
      res.send(category);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newCategory = await Category.create(req.body);
      res.send(newCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const cart = await Category.findByPk(req.params.id);
      res.send(cart);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      updatedCategory = await Category.update(req.body, {
        returning: true,
        plain: true,
        where: { id: req.params.id },
      });

      res.send(updatedCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      Category.destroy({ where: { id: req.params.id } }).then((info) => {
        if (info > 0) res.send("Deleted");
        else res.send("Not matched");
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
