import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.put("/user", (req: Request, res: Response) => {
  res.send("Got a POST request at /user");
});

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
