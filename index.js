import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import recipesRoutes from "./routes/recipes.routes.js";

const app = express();

//use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//use routes
app.use(recipesRoutes);

//make connection to database
await mongoose.connect(process.env.MONGO_URI);

//start the server
app.listen(6000, () => {
  console.log("expresss app is running");
});
