import express from "express";
import resolve from "path";
const app = express();
const port = 3010;
import Users from "./model/user.js";
import connectDB from "./db/connectDB.js";
import bcrypt from "bcrypt";

app.use(express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(resolve(__dirname, "pages/index.html"));
// });

connectDB();

app.post("/create", async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    const hashedpass = await bcrypt.hash(password, 10);

    const newuser = new Users({ username, mail, password: hashedpass });
    await newuser.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully",user:newuser });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "internal server error" });
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      usersData: users,
    });
  } catch (error) {
    res.status(501).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
