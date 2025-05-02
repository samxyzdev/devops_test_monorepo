import express from "express";
import prisma from "@repo/db/client";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const createUser = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
  });
  res.json({
    msg: "Signup successfull",
    id: createUser.id,
  });
});

app.listen(3001);
