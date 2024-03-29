const mongoose = require("mongoose");

try {
  const client = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to MongoDB @ ${client.connection.host}`);
} catch (error) {
  console.log(error.stack);
  process.exit(1);
}
