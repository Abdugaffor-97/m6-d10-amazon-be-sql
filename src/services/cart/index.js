const { Router } = require("express");
const { Cart } = require("../../models");

const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const carts = await Cart.findAll();
      res.send(carts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newCart = await Cart.create(req.body);
      res.send(newCart);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const cart = await Cart.findByPk(req.params.id);
      res.send(cart);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      updatedCart = await Cart.update(req.body, {
        returning: true,
        plain: true,
        where: { id: req.params.id },
      });

      res.send(updatedCart);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      Cart.destroy({ where: { id: req.params.id } }).then((info) => {
        if (info > 0) res.send("Deleted");
        else res.send("Not matched");
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
