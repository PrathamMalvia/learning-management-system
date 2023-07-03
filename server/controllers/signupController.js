const db = require("../config/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = function signUp(req, res) {
  const name = req.body.name;
  const id = req.body.id;
  const email = req.body.email;
  const password = req.body.password; 
  if (req.query.type == "student") {
    //   ! Signup student
    // Generate a salt and hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({
          result: false,
          error: "Failed to hash password",
        });
      }
      const values = [name, id, email, hashedPassword];
      const sql =
        "INSERT INTO users (name, collegeid, email, password) VALUES (?)";
      db.query(sql, [values], (err, data) => {
        if (err) {
          return res.status(500).json({
            result: false,
            error: "Failed to create user",
          });
        }
        if (data) {
          res.status(200).json({
            result: true,
            message: "Student Registered Successfully!",
          });
        }
      });
    });
    // Generate a salt and hash the password using bcrypt
  } else if (req.query.type == "hod") {
    //   ! Signup hod
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({
          result: false,
          error: "Failed to hash password",
        });
      }

      const values = [name, id, email, hashedPassword];
      const sql =
        "INSERT INTO hods (name, employeeid, email, password) VALUES (?)";
      db.query(sql, [values], (err, data) => {
        if (err) {
          return res.status(500).json({
            result: false,
            error: "Failed to create HOD",
          });
        }
        if (data) {
          res.status(200).json({
            result: true,
            message: "HOD Registered Successfully!",
          });
        }
      });
    });
  } else if (req.query.type == "faculty") {
    //   ! Signup teacher
    // Generate a salt and hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({
          result: false,
          error: "Failed to hash password",
        });
      }

      const values = [name, id, email, hashedPassword];
      const sql =
        "INSERT INTO teachers (name, employeeid, email, password) VALUES (?)";
      db.query(sql, [values], (err, data) => {
        if (err) {
          return res.status(500).json({
            result: false,
            error: "Failed to create teacher",
          });
        }
        if (data) {
          res.status(200).json({
            result: true,
            message: "Teacher Registered Successfully!",
          });
        }
      });
    });
  } else {
    res.status(404).json({
      result: false,
      message: "URL not correct!",
    });
  }
};
