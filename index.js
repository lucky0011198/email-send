require("dotenv").config();
const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(process.env.API_KEY);
const message = {
  to: "varkallaxmikant62@gmail.com",
  from: "attendanceandmuchmore@gmail.com",
  subject: "hellow from lucky",
  text: "you done it man",
  html: "<h1>you done it man</h1>",
};
sgmail
  .send(message)
  .then((response) => console.log("email sent", response))
  .catch((error) => console.log(error.message));
