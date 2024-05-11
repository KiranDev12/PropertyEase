import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  console.log("Router works");
});

export default router;
