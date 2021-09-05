import Head from "next/head";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Code() {
	const [code, setCode] = useState(`// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}`);

	const sideNum = code.split("\n");
	return (
		<div className="">
			<Head>
				<title>Tempcode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<div className="flex py-[1rem] px-[0.5rem] text-[1rem]">
				<div className="text-[#7D7D7D] text-[end]">
					{sideNum?.map((line, index) => (
						<div>{index + 1}</div>
					))}
				</div>
				<pre className="whitespace-pre">
					<code
						className="language-plaintext"
						style={{ paddingTop: "0", paddingBottom: "0" }}
					>
						{`${code}`}
					</code>
				</pre>
			</div>
		</div>
	);
}
