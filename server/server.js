const path = require("path");
const express = require("express");

const app = express();
const publicPath = path.join(__dirname, "..", "build");
const PORT = process.env.PORT || 5000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Express server is running on PORT ${PORT}`);
});
