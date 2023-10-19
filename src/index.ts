import express, { Request, Response } from "express";
import cors from "./middleware/cors";
import requestLog from "./middleware/requestLog";
import { Logging } from "./utils/lib/Logging";

const app = express();

app.use(cors)
app.use(requestLog)

app.use("/ping", (req: Request, res: Response) => {
  res.json(req.body);
});


const port = 5200;
app.listen(port, () =>
  Logging.info(`Server is running at http://localhost:${port}`)
);
