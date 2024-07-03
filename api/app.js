const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

const JWT_SECRET = "MySecretKey";
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "repaw",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Koneksi ke MySQL berhasil!");
});

app.post("/register", (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    location: req.body.location,
    postcode: req.body.postcode,
    tel: req.body.tel,
    email: req.body.email,
    password: req.body.password,
    bio: "",
  };

  const checkUserSql = `SELECT * FROM users WHERE email='${data.email}'`;

  db.query(checkUserSql, (err, result) => {
    if (err) return res.status(500).send({ error: err });

    if (result.length > 0) {
      res.json({ message: "Email sudah terdaftar" });
    } else {
      const registerUserSql = "INSERT INTO users SET ?";

      db.query(registerUserSql, data, (err, result) => {
        if (err) return res.status(500).send({ error: err });
        res.json({ message: "Berhasil melakukan registrasi", data: result });
      });
    }
  });
});

app.put("/profile/update", verifyToken, (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const userId = authData.id;
      const updatedData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        location: req.body.location,
        postcode: req.body.postcode,
        tel: req.body.tel,
        email: req.body.email,
        bio: req.body.bio 
      };

      const updateUserSql = `UPDATE users SET ? WHERE id = ?`;

      db.query(updateUserSql, [updatedData, userId], (err, result) => {
        if (err) {
          res.status(500).send({ error: err });
        } else {
          res.json({ message: "Data pengguna berhasil diperbarui" });
        }
      });
    }
  });
});


app.post("/login", (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  const checkSql = `SELECT * FROM users WHERE email='${data.email}' AND password='${data.password}'`;

  db.query(checkSql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const token = jwt.sign(
        {
          id: result[0].id,
          email: result[0].email,
        },
        JWT_SECRET
      );

      res.json({ success: true, message: "Berhasil masuk", token: token });
    } else {
      res.json({ success: false, message: "Kredential salah" });
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get("/verify", verifyToken, (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403).json({ verified: false });
    } else {
      res.json({ verified: true });
    }
  });
});

app.get("/profile", verifyToken, (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const sql = `SELECT id, firstname, lastname, location, postcode, tel, email, bio FROM users WHERE id='${authData.id}'`;

      db.query(sql, (err, result) => {
        if (err) throw err;
        res.json({ user: result[0] });
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
