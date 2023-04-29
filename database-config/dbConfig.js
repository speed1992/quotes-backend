import mongoose from "mongoose";

const dbConfig = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default dbConfig;
