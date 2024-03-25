import { Router } from "express";
import dotenv from "dotenv";

import {
  addRecipe,
  deleteAllRecipes,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../controllers/recipes.controller.js";

dotenv.config({ path: [".env.local"] });
const router = Router();

router.post("/", addRecipe);

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

router.delete("/", deleteAllRecipes);

export default router;
