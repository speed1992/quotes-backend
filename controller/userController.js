import userSchema from "../models/users.js";

const loginUser = async (req, res) => {
  let results;
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    results = await userSchema.find({ userName, password });
    console.log(results);
    if (results.length > 0) {
      res.status(200).json({
        ok: true,
        data: results,
        serverResponse: "Successfully logged in!",
      });
    } else {
      res.status(500).json({
        ok: false,
        error: "User does not exist!",
      });
    }
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const params = { ...req.body };
    const userName = req.body.userName;
    let results;

    results = await userSchema.find({ userName });
    console.log(results);

    if (results.length > 0) {
      res.status(500).json({ ok: false, error: "User already exists!" });
    } else {
      await userSchema.create({ ...params });
      res.status(200).json({ ok: true, serverResponse: "User Created!" });
      console.log("createUser done");
    }
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
};

export { loginUser, createUser };
