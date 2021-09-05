import Head from "next/head";
import Script from "next/script";
import Sidebar from "../component/sidebar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tempcode</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Sidebar />
			<form>
				<div className="flex py-[1rem] px-[0.5rem] text-[1rem]">
					<div className="text-[#7D7D7D] text-[end]">&gt;</div>
					<textarea
						autoFocus
						className="bg-transparent resize-none w-full p-0 ml-[1rem] text-[#7D7D7D] min-h-[calc(100vh - 2rem)] border-none outline-none"
					></textarea>
				</div>
			</form>
			<Script>autosize(document.querySelector('textarea'))</Script>
		</div>
	);
}