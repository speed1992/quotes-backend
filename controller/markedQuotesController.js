import markedQuotesSchema from "../models/markedQuotes.js";

const getAllMarkedQuotes = (req, res) => {
  res.send("getAllMarkedQuotes");
};

const createUpdateMarkedQuotes = async (req, res) => {
  let found;
  try {
    const filter = { userId: req.body.userId };
    const update = { ...req.body };

    await markedQuotesSchema.findOneAndUpdate(filter, update, {
      upsert: true,
    });

    found = await markedQuotesSchema.findOne(filter);

    console.log("createUpdateMarkedQuotes done");
    console.log(found);
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
  res.status(200).json({ ok: true });
};

export { getAllMarkedQuotes, createUpdateMarkedQuotes };
