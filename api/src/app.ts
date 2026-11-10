import express, {
  type Express,
  type Request,
  type Response,
  type ErrorRequestHandler,
} from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import openapiSpec from "./docs/openapi.ts";

import placesRoutes from "./routes/placesRoutes.ts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.message);
  res.status(500).json({ message: "Internal Server Error" });
};

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));
app.use("/api/places", placesRoutes);
app.use((_req: Request, res: Response) =>
  res.status(400).json({ message: "No route found" }),
);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
