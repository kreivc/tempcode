import connectDB from "../../utils/connectDB";
import Code from "../../models/codeModel";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			await getCode(req, res);
			break;
	}
};

const getCode = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id;
	try {
		const code = await Code.findById(id);

		res.status(200).json(code);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};
