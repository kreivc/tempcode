import router from "next/router";
import { useState } from "react";

export default function Nav() {
	const [language, setLanguage] = useState("");

	return (
		<div className="text-white bg-[#1d9494] w-full h-12 flex items-center  justify-between">
			<a href="#" className="text-xl text-white mx-3">
				Tempcode
			</a>
			<div className="flex mx-3">
				<select
					name="language"
					id="language"
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2 active:outline-none outline-none"
				>
					<option value="html">Html</option>
					<option value="css">Css</option>
					<option value="js">Javascript</option>
					<option value="java">Java</option>
				</select>
				<button
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2"
					type="submit"
					onClick={() => router.push("/")}
				>
					New
				</button>
				<button
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md"
					type="submit"
				>
					Save
				</button>
			</div>
		</div>
	);
}
