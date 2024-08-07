import markedQuotesSchema from "../models/markedQuotes.js";
import { getMarkedQuotesLength } from "./utils/utils.js";

const retrieveAllMarkedQuotes = async (req, res) => {
  const userName = req.body.userName;

  let results;
  try {
    results = await markedQuotesSchema.find({ userName });
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
  if (results.length > 0) res.status(200).json({ ok: true, results });
  else res.status(500).json({ ok: false, error: "No quotes found on server!" });
};

const getAllMarkedQuotesCount = async (req, res) => {
  const userName = req.body.userName;

  let results;
  try {
    results = await markedQuotesSchema.find({ userName });
    const count = results?.[0]?.markedQuotes
      ? Object.values(results?.[0]?.markedQuotes)?.flat?.()?.length
      : 0;

    if (results?.length > 0 && count) res.status(200).json({ ok: true, count });
    if (!count) res.status(200).json({ ok: true, count: 0 });
    else
      res.status(200).json({ ok: false, error: "No quotes found on server!" });
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
};

const createUpdateMarkedQuotes = async (req, res) => {
  let userData;
  try {
    const filter = { userName: req.body.userName };
    const update = { ...req.body };

    const incomingMarkedQuotesCount = getMarkedQuotesLength(
      update?.markedQuotes
    );

    userData = await markedQuotesSchema.findOne(filter);
    const alreadyStoredMarkedQuotesCount = getMarkedQuotesLength(
      userData?.markedQuotes
    );

    if (incomingMarkedQuotesCount > alreadyStoredMarkedQuotesCount) {
      await markedQuotesSchema.findOneAndUpdate(filter, update, {
        upsert: true,
      });
    }
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
  res.status(200).json({
    ok: true,
    message: "Marked quotes successfully synced with server!",
  });
};

export {
  retrieveAllMarkedQuotes,
  createUpdateMarkedQuotes,
  getAllMarkedQuotesCount,
};
