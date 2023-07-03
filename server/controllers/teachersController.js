const db = require("../config/db.config");

module.exports = function showTeachers(req, res) {
  const sql = "SELECT * FROM teachers ORDER BY id";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        result: false,
        error: "Failed to fetch teachers",
      });
    }
    return res.json({
      result: true,
      results,
    });
  });
};
