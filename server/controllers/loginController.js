const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  if (req.query.type == "student") {
    // ! If the user is student
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err || results.length === 0) {
        return res.status(500).json({
          result: false,
          error: err || "Invalid email or password",
        });
      }
      const user = results[0];
      // Compare the password with the hashed password stored in the database
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({
            result: false,
            error: err || "Invalid email or password",
          });
        }
        // * Generate a JWT token
        createToken(req, res, results, process.env.JWT_SECRET_KEY);
      });
    });
  } else if (req.query.type == "hod") {
    // ! If the user is hod
    // Check if the email exists in the HODs table
    const sql = "SELECT * FROM hods WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err || results.length === 0) {
        return res.status(500).json({
          result: false,
          error: err || "Invalid email or password",
        });
      }

      const hashedPassword = results[0].password;

      // Compare the provided password with the hashed password using bcrypt
      bcrypt.compare(password, hashedPassword, (err, passwordMatch) => {
        if (err || !passwordMatch) {
          return res.status(401).json({
            result: false,
            error: err || "Invalid email or password",
          });
        }

        // * Generate a JWT token
        createToken(req, res, results, process.env.JWT_SECRET_KEY);
      });
    });
  } else if (req.query.type == "teacher") {
    // ! If the user is faculty 
    const sql = "SELECT * FROM teachers WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err || results.length === 0) {
        return res.status(500).json({
          result: false,
          error: err || "Invalid email or password",
        });
      }

      const teacher = results[0];
      bcrypt.compare(password, teacher.password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({
            result: false,
            error: err || "Invalid email or password",
          });
        }

        // * Generate a JWT token
        createToken(req, res, results, process.env.JWT_SECRET_KEY);
      });
    });
  } else {
    // ! If the user type is not defined
    res.status(404).json({
      result: false,
      message: "URL not correct!",
    });
  }
}

function createToken(req, res, result, key) {
  jwt.sign({ result }, key, { expiresIn: "12h" }, (err, token) => {
    console.log("Login successfull!");
    if (token) {
      return res.status(200).json({
        result: true,
        message: "Login successfull!",
        token: token,
      });
    }
    if (err) {
      return res.status(500).json({
        result: false,
        error: err,
      });
    }
  });
}

// function comparePasswords(password, hashedPassword) {

// }

module.exports = loginUser;
