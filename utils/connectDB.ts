import mongoose from "mongoose";

const connectDB = () => {
	if (mongoose.connections[0].readyState) {
		console.log("Already connected.");
		return;
	}

	if (process.env.MONGODB_URL === undefined) {
		throw new Error("Please set MONGODB_URL to connect to MongoDB");
	}

	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		.then(() => console.log("Connected to MongoDB 🍀"))
		.catch((err) => console.log(err));
};

export default connectDB;
