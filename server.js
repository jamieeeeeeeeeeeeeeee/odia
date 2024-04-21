import { handler } from "./build/handler";
import express from "express";

const app = express();
app.use(express.json());

app.use(handler);

/* This is being hosted using Azure Web App Service */
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is correctly running on port ${port}`);
});