const db = require("../config/db.config");

module.exports = function showNotices(req, res) {
  const sql = "SELECT * FROM notice ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      // Handle the database error
      return res.status(500).json({
        result: false,
        error: "An error occurred while retrieving notices",
      });
    }

    return res.status(200).json({
      result: true,
      results,
    });
  });
};
