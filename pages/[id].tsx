import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Code() {
	const router = useRouter();
	const { id } = router.query;
	const [code, setCode] = useState("");
	const [language, setLanguage] = useState('text');

	useEffect(() => {
		let mounted = true;
		(async () => {
			if (id !== undefined) {
				const res = await axios.get(`/api/${id}`);
				if (mounted) {
					setCode(res.data.value);
				}
			}
		})();
		return () => {
			mounted = false;
		};
	}, [id]);

	const sideNum = code.split("\n");
	return (
		<div className="">
			<Head>
				<title>Tempcode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav onChange={v => setLanguage(v)} />
			<div className="flex py-[1rem] px-[0.5rem] text-[1rem]">
				<div className="text-[#7D7D7D] text-[end]">
					{sideNum?.map((line, index) => (
						<div key={index}>{index + 1}</div>
					))}
				</div>
				<pre className="whitespace-pre text-[#7D7D7D]">
					<code
						className={`language-${language}`}
						style={{ paddingTop: "0", paddingBottom: "0" }}
					>
						{`${code}`}
					</code>
				</pre>
			</div>
			<Script>hljs.highlightAll();</Script>
		</div>
	);
}
