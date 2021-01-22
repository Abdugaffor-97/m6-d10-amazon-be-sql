const { Router } = require("express");
const { Review } = require("../../models");

const router = Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const reviews = await Review.findAll();
      res.send(reviews);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newPorduct = await Review.create(req.body);
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
      const Review = await Review.findByPk(req.params.id);
      res.send(Review);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      updatedReview = await Review.update(req.body, {
        returning: true,
        plain: true,
        where: { id: req.params.id },
      });

      res.send(updatedReview);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      Review.destroy({ where: { id: req.params.id } }).then((info) => {
        if (info > 0) res.send("Deleted");
        else res.send("Not matched");
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

module.exports = router;
