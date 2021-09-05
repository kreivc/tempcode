import connectDB from "../../utils/connectDB";
import Code from "../../models/codeModel";

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case "GET":
			await getCode(req, res);
			break;
	}
};

const getCode = async (req, res) => {
	const id = req.params.id;
	try {
		const code = await Code.findById(id);

		res.status(200).json(code);
	} catch (err) {
		return res.status(500).json(err.message);
	}
};
