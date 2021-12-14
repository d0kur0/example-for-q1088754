import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { saveMySuperForm } from "./db.js";
import bodyParser from "body-parser";

const getAbsolutePath = (relativePath) => {
  return join(dirname(fileURLToPath(import.meta.url)), relativePath);
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_, response) =>
  response.sendFile(getAbsolutePath("./layout/index.html"))
);

app.get("/success", (_, response) =>
  response.sendFile(getAbsolutePath("./layout/success.html"))
);

app.post("/save", (request, response) => {
  saveMySuperForm(request.body).then(
    () => response.redirect("/success"),
    (err) => response.send(`Unknown err, suck. Try again. : ${err}`)
  );
});

app.listen(1488, () => console.log("open: http://localhost:1488"));
