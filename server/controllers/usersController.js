const db = require("../config/db.config");

module.exports = function showUsers(req, res) {
  const sql = "SELECT * FROM users ORDER BY id";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch users" });
    }

    return res.json({
      result: true,
      results,
    });
  });
};
