import { Router } from "express";
import dotenv from "dotenv";
import { Recipe } from "../model/recipe.js";

dotenv.config({ path: [".env.local"] });
const router = Router();

router.post("/recipes", async (req, res) => {
  const insertOneresult = await Recipe.create(req.body);
  res.json(insertOneresult);
});

router.get("/recipes", async (req, res) => {
  const result = await Recipe.find();
  res.json(result);
});

router.get("/recipes/:id", (req, res) => {
  res.json(`recipe with id:${req.params.id}`);
});

router.patch("/recipes/:id", async (req, res) => {
  const result = await Recipe.updateOne({ _id: req.params.id });
  res.json(result);
});

router.delete("/recipes/:id", async (req, res) => {
  const result = await Recipe.deleteOne({ _id: req.params.id });
  res.json(result);
});

export default router;
