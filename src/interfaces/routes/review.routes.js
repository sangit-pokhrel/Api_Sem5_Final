// 📁 src/interfaces/routes/review.routes.js
const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  router.post("/", controller.create);
  router.get("/", controller.getAll);
  router.get("/:id", controller.getOne);
  router.put("/:id", controller.update);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.remove);

  return router;
};
