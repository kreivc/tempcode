import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { postData } from "../../nextjs-ecommerce/utils/fetchData";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

export default function Home() {
	const [code, setCode] = useState();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await postData("save", { value: code });
			console.log(res._id);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<Head>
				<title>Tempcode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<form onSubmit={handleSubmit}>
				<Nav />
				<div className="flex py-[1rem] px-[0.5rem] text-[1rem]">
					<div className="text-[#7D7D7D] text-[end]">&gt;</div>
					<textarea
						autoFocus
						className="bg-transparent resize-none w-full p-0 ml-[1rem] text-[#7D7D7D] min-h-[calc(100vh - 2rem)] border-none outline-none"
						onChange={(e) => setCode(e.target.value)}
					></textarea>
				</div>
			</form>
			<Script>autosize(document.querySelector('textarea'))</Script>
		</div>
	);
}
