import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";

export type NavProps = {
	onChange?: (newValue: string) => void;
};

export default function Nav(props: NavProps) {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className="text-white bg-[#1d9494] w-full h-12 flex items-center  justify-between">
			<a
				className="text-xl text-white mx-3"
				onClick={() => router.push("/")}
			>
				Tempcode
			</a>
			<div className="flex mx-3">
				<select
					name="language"
					id="language"
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2 active:outline-none outline-none"
					onChange={(e) => props.onChange?.(e.target.value)}
				>
					<option value="text">Plain</option>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="js">JavaScript</option>
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
					className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2"
					type="submit"
					disabled={id === undefined ? false : true}
				>
					Save
				</button>
				<CopyToClipboard text={`${process.env.BASE_URL}/${id}`}>
					<button
						className="text-base py-1 px-4 bg-gray-200 text-black rounded-md mr-2"
						type="submit"
					>
						Share
					</button>
				</CopyToClipboard>
			</div>
		</div>
	);
}
