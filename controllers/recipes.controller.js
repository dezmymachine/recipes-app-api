import { Recipesmodel } from "../model/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    console.log(req.body);
    //Add recipe to database
    const createResult = await Recipesmodel.create({
      ...req.body,
      image: req.file.filename,
    });
    //return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};
export const getRecipes = async (req, res) => {
  try {
    //get all recipes
    const findResult = await Recipesmodel.find();
    //return response
    res.status(200).json(findResult);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  // let getOneRecipe = await Recipesmodel.findOne({ _id: req.params.id });
  // res.status(200).json(getOneRecipe);
  // res.send(`recipe with id:${req.params.id}`);

  try {
    //get single recipe by id
    const findByIdResult = await Recipesmodel.findById(req.params.id);
    //return 404 if no recipe is found
    // if (findByIdResult === null) {
    //   return res.status(404).json({
    //     message: `Recipe with ID : ${req.params.id} not found`,
    //   });
    // }
    // //return response
    // res.status(200).json(findByIdResult);
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Recipe with ID : ${req.params.id} not found`,
      });
    } else {
      //return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const updateRecipe = async (req, res) => {
  let updateOneRecipe = await Recipesmodel.updateOne({ _id: req.params.id });
  res.status(200).json(updateOneRecipe);
  // res.send(`update recipe with id:${req.params.id}`);
};

export const deleteRecipe = (req, res) => {
  res.send(`delete recipe with id:${req.params.id}`);
};
export const deleteAllRecipes = (req, res) => {
  res.send("deleted all recipes");
};
