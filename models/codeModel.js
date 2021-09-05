import mongoose from "mongoose";

const codeSchema = new mongoose.Schema(
	{
		value: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

codeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 259200 }); //3 days

let Code = mongoose.models.code || mongoose.model("code", codeSchema);
export default Code;
