import Head from "next/head";
import { useState } from "react";
import Sidebar from "../component/sidebar";

export default function Code() {
	const [code, setCode] =
		useState(`Welcome to Tempcode use the command top right

testing pre tag for temp code
heheheh
asdasddas`);
	const sideNum = code.split("\n");
	return (
		<div className="">
			<Head>
				<title>Tempcode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Sidebar />
			<div class="flex py-[1rem] px-[0.5rem] text-[1rem]">
				<div class="text-[#7D7D7D] text-[end]">
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
