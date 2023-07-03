const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function verifyToken(req, res, next) {
  // console.log(req.headers);
  const bearerHeader = req.headers["authorization"];
  // console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    // console.log(req.token);
    jwt.verify(req.token, process.env.JWT_SECRET_KEY, (err, authData) => {
      if (err) {
        console.log("Invalid Token");
        res.status(500).send({ message: "Invalid Token with err" });
      } else {
        next();
      }
    });
  } else {
    console.log("Invalid Token");
    res.status(500).send({
      result: "token is not valid",
    });
  }
}

module.exports = verifyToken;
