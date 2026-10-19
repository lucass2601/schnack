import express, { type Express, type Request, type Response } from "express";

import placesRoutes from "./routes/placesRoutes.ts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/places", placesRoutes);

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
