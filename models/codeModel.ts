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

codeSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

let Code = mongoose.models.code || mongoose.model("code", codeSchema);
export default Code;
