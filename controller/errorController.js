import errorSchema from "../models/error.js";

const sendErrors = async (req, res) => {
  const errorDetails = req.body.errorDetails;
  const userName = req.body.userName;

  try {
    await errorSchema.create({ userName, errorDetails: errorDetails });
    res.status(200).json({ ok: true, serverResponse: "Noted the error." });
    return;
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
  res.status(500).json({
    ok: false,
    serverResponse: "Something went wrong. Could not note the error",
  });
};

const getErrors = async (req, res) => {
  try {
    const results = await errorSchema.find({});
    res.status(200).json({ ok: true, errorList: results });
    return;
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
};

export { sendErrors, getErrors };
