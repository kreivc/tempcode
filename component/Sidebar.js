import React from "react";

export default function Sidebar() {
	return (
		<div className=" bg-[#0081A2] w-full h-8">
			<a href="#" className="text-xl">
				Tempcode
			</a>
			<div className="flex">
				<a
					href="#"
					className="text-base py-2 px-4 bg-gray-200 text-black"
				>
					New
				</a>
				<button className="text-base py-2 px-4 bg-gray-200 text-black">
					Save
				</button>
			</div>
		</div>
	);
}
