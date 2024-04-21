import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

/* This is being hosted using Azure Web App Service */
const port = 8080;
app.listen(port, () => {
  console.log(`Server is correctly running on port ${port}`);
});