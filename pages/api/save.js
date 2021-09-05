import connectDB from "../../utils/connectDB";
import Code from "../../models/codeModel";

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await postCode(req, res);
			break;
	}
};

const postCode = async (req, res) => {
	const value = req.body.value;
	try {
		const code = await Code.create({ value });

		res.status(200).json(code);
	} catch (err) {
		return res.status(500).json(err.message);
	}
};
