import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import openapiSpec from "./docs/openapi.ts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

import placesRoutes from "./routes/placesRoutes.ts";
app.use("/api/places", placesRoutes);

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
