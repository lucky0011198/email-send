require("dotenv").config();
const sgmail = require("@sendgrid/mail");
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

sgmail.setApiKey(process.env.API_KEY);

const message = {
  to: "varkallaxmikant62@gmail.com",
  from: "attendanceandmuchmore@gmail.com",
  subject: "hellow from lucky",
  text: "you done it man",
  html: "<h1>you done it man</h1>",
};
app.get("/", (req, res) => {
  sgmail
    .send(message)
    .then((response) => console.log("email sent", response))
    .catch((error) => console.log(error.message));
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
