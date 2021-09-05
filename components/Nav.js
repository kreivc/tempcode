export default function Nav() {
	return (
		<div className="text-white bg-[#1d9494] w-full h-12 flex items-center  justify-between">
			<a href="#" className="text-xl text-white mx-3">
				Tempcode
			</a>
			<div className="flex mx-3">
				<a
					href="#"
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2"
				>
					New
				</a>
				<button className="text-base py-1 px-4 bg-gray-200 text-black rounded-md">
					Save
				</button>
			</div>
		</div>
	);
}
