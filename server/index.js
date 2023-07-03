const express = require("express");
const db = require("./config/db.config");
const cookie = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const verifyToken = require("./middleware/verifyToken");

const multer = require("multer");
const ImageKit = require("imagekit");

const app = express();

app.use(cookie());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL database connected");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// ! Routes importing

const loginRoute = require("./routes/loginRoute");
const signupRoute = require("./routes/signupRoute");
const noticeRoute = require("./routes/noticeRoute");
const userRoute = require("./routes/usersRoute");
const teachersRoute = require("./routes/teachersRoute");

app.use("/login", loginRoute);
app.use("/signup", signupRoute);
app.use("/notices", noticeRoute);
app.use("/allusers", userRoute);
app.use("/allteachers", teachersRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running");
});



// GET endpoint to fetch the timetable from the database
app.get("/api/timetable", (req, res) => {
  const sql = "SELECT * FROM timetable";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching timetable:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// POST endpoint to add a new entry to the timetable
app.post("/api/timetable", (req, res) => {
  const { day, time, faculty, subject } = req.body;
  const sql =
    "INSERT INTO timetable (day, time, faculty, subject) VALUES (?,?,?,?)";
  db.query(sql, [day, time, faculty, subject], (err, results) => {
    if (err) {
      console.error("Error adding entry:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res
        .status(201)
        .json({ id: results.insertId, day, time, faculty, subject });
    }
  });
});

app.delete("/api/timetable/:day/:time", (req, res) => {
  const { day, time } = req.params;
  const sql = "DELETE FROM timetable WHERE day = ? AND time = ?";
  db.query(sql, [day, time], (err, results) => {
    if (err) {
      console.error("Error deleting entry:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows > 0) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: "Entry not found" });
      }
    }
  });
});

app.put("/api/timetable/:day/:time", (req, res) => {
  const { day, time } = req.params;
  const { newDay, newTime, subject } = req.body;
  const sql = "UPDATE timetable SET day = ?, time = ?, subject = ? WHERE day = ? AND time = ?";
  db.query(sql, [newDay, newTime, subject, day, time], (err, results) => {
    if (err) {
      console.error("Error updating entry:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows > 0) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: "Entry not found" });
      }
    }
  });
});



// Create an instance of the ImageKit SDK
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/vu1f2021048/resources",
});

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // Set the maximum file size
});

app.post("https://upload.imagekit.io/api/v1/files/upload", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    const fileName = req.body.fileName || file.originalname;
    const folder = req.body.folder || "/";

    // Upload the file to ImageKit
    const uploadResponse = await imagekit.upload({
      file: file.buffer,
      fileName: fileName,
      folder: folder,
    });

    // Perform any necessary actions with the uploadResponse
    // For example, store the file details in the database
    const fileUrl = uploadResponse.url;

    // Perform database query to store the file details
    const query = "INSERT INTO files (filename, fileurl) VALUES (?, ?)";
    db.query(query, [fileName, fileUrl], (error, results) => {
      if (error) {
        console.error("Failed to store file details in the database:", error);
        res.status(500).json({ success: false, message: "Failed to store file details" });
      } else {
        console.log("File details stored in the database");
        res.status(200).json({ success: true, message: "File uploaded successfully" });
      }
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ success: false, message: "Failed to upload file" });
  }
});


// Student attendance
app.post("/api/students", (req, res) => {
  const { name, timestamp } = req.body;

  const sql = `INSERT INTO students (name, timestamp) VALUES (?, ?)`;

  db.query(sql, [name, timestamp], (error, results) => {
    if (error) {
      console.error("Error inserting into the database:", error);
      res.status(500).json({ error: "Error inserting into the database" });
    } else {
      console.log("Successfully inserted into the database:", results);
      res.sendStatus(200);
    }
  });
});


// app.post("/attendance", verifyToken, (req, res) => {
//   const student_name = req.body.name;

//   const sql = `INSERT INTO attendance (student_name) VALUES (?)`;

//   db.query(sql, [student_name], (error, results) => {
//     if (error) {
//       console.error("Error inserting into the database:", error);
//       res.status(500).json({ error: "Error inserting into the database" });
//     } else {
//       console.log("Successfully inserted into the database:", results);
//       res.sendStatus(200);
//     }
//   });
// });


// Get all events
app.get('/addEvent', verifyToken, (req, res) => {

  const sql = "SELECT * FROM schedule ";
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get Event' });
    }
    else {
      return res.status(200).json({ message: 'Event Successfull', data: data });
    }
  })

})

// Add new event in Schedule
app.post('/addEvent', verifyToken, (req, res) => {
  const { Id, Subject, StartTime, EndTime } = req.body;

  const values = [Id, Subject, StartTime, EndTime];
  console.log(values);
  const sql = "INSERT INTO schedule ( Id,  Subject, StartTime, EndTime ) VALUES (?)";
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create event' });
    }
    else {
      return res.status(200).json({ message: 'Added Successful', data: data });
    }
  })


})



// PDF File Upload for Notice
const file_storage = multer.diskStorage({
  destination: path.join(__dirname, "../public_html/fileUploads"),
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/pdfupload", (req, res) => {
  const upload = multer({ storage: file_storage }).single("pdf");
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred
      return res.status(500).json({ error: err.message });
    } else if (err) {
      // An unknown error occurred
      return res
        .status(500)
        .json({ error: "An error occurred while uploading the file" });
    }

    if (!req.file) {
      // No file selected
      return res
        .status(400)
        .json({ error: "Please select a PDF file to upload" });
    }

    const sql = "INSERT INTO notice (fileName, file, hodName) VALUES (?, ?, ?)";
    const values = [req.body.file_name, req.file.filename, req.body.hod_name];

    db.query(sql, values, (err) => {
      if (err) {
        // Handle the database error
        return res
          .status(500)
          .json({ error: "An error occurred while storing the file" });
      }

      res.json({ success: 1 });
    });
  });
});

// Image Upload for Time Table
const img_storage = multer.diskStorage({
  destination: path.join(__dirname, "../public_html/", "imgUploads"),
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.post("/imageupload", async (req, res) => {
  try {
    let upload = multer({ storage: img_storage }).single("avatar");

    upload(req, res, function (err) {
      if (!req.file) {
        return res.send("Please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }

      const sql = "INSERT INTO imagetimetable (image, teacherName) VALUES (?, ?)";
      const values = [req.file.filename, req.body.teacher_name];
      db.query(sql, values, (err) => {
        if (err) throw err;
        res.json({ success: 1 });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

// Courses for Courses Page
app.get("/courses", verifyToken, (req, res) => {
  console.log("Inside courses")
  const sql = "SELECT * FROM courses ORDER BY id";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch courses" });
    }

    const courses = result.map((course) => {
      return {
        id: course.id,
        name: course.name,
        lessons: course.lessons,
        image: course.image,
        videolink: course.videolink,
      };
    });

    return res.status(200).json(courses);
  });
});

// Courses for Dashboard Page
app.get("/newcourses", verifyToken, (req, res) => {
  const sql = "SELECT * FROM newcourses ORDER BY id";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch courses" });
    }

    const courses = result.map((course) => {
      return {
        id: course.id,
        name: course.name,
        lessons: course.lessons,
        image: course.image,
        videolink: course.videolink,
      };
    });

    return res.json(courses);
  });
});
