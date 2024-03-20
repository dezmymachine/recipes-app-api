import { Schema, model } from "mongoose";

const RecipeSchema = new Schema({
  title: { type: String, required: true },
});
export const Recipe = model("Recipe", RecipeSchema, "recipes");
