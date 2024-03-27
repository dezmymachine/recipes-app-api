import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import recipesRoutes from "./routes/recipes.routes.js";

const app = express();

const PORT = process.env.PORT || 4000;
//use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("uploads"));

//apply middlewares
// app.use(express.json());
// app.use(express.urlencoded({extended}))
//use routes
app.use("/recipes", recipesRoutes);

//make connection to database
await mongoose.connect(process.env.MONGO_URI);

//start the server
app.listen(PORT, () => {
  console.log(`dezrecipe-app is running on dezmyport:${PORT}`);
});
