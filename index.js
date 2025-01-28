const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hi Mom" });
});


app.post("/path", (req, res) => {
  console.log(req.body);
  res.json({ response: fizzBuzz(req.body.numbers) });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


function fizzBuzz(numbers) {
  return numbers;
}

