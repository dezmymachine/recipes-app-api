import { Router } from "express";
import multer from "multer";
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
//create multer upload middleware
const upload = multer({ dest: "uploads/images" });
//create recipes router
const router = Router();

router.post("/", upload.single("image"), addRecipe);

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

router.delete("/", deleteAllRecipes);

export default router;
