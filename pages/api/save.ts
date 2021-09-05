import connectDB from "../../utils/connectDB";
import Code from "../../models/codeModel";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "POST":
			await postCode(req, res);
			break;
	}
};

const postCode = async (req: NextApiRequest, res: NextApiResponse) => {
	const value = req.body.value;
	try {
		const code = await Code.create({ value });

		res.status(200).json(code);
	} catch (err) {
		return res.status(500).json(err.message);
	}
};
