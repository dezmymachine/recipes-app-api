import { Recipesmodel } from "../model/recipe.js";

export const addRecipe = async (req, res) => {
  //Add recipe to database
  const createResult = await Recipesmodel.create(req.body);
  //return response
  res.status(201).json(createResult);
};
export const getRecipes = async (req, res) => {
  //get all recipes
  const findResult = await Recipesmodel.find();
  //return response
  res.status(200).json(findResult);
};

export const getRecipe = async (req, res) => {
  let getOneRecipe = await Recipesmodel.findOne({ _id: req.params.id });
  res.status(200).json(getOneRecipe);
  // res.send(`recipe with id:${req.params.id}`);
};

export const updateRecipe = (req, res) => {
  res.send(`update recipe with id:${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
  res.send(`delete recipe with id:${req.params.id}`);
};
export const deleteAllRecipes = (req, res) => {
  res.send("deleted all recipes");
};
