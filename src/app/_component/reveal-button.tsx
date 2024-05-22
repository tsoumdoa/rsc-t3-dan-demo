"use client";

import { useState } from "react";
import { getUser } from "../_actions/get-user";

export function RevealButtuon(props: { children: React.ReactNode }) {
	const [revealed, setRevealed] = useState(false);

	if (revealed) return props.children;
	else
		return (
			<button
				className="text-center text-3xl w-fit stroke-white outline outline-3 rounded-md px-2 py-1 outline-white"
				onClick={() => {
					// getUser() function here isn't relevant to the original talk by
					// Dan or t3.gg's stream, this function gets called on server
					// inspired by a video by John Tried Coding 
					// https://www.youtube.com/watch?v=OgVeQVXt7xU&t=17s
					getUser()
					setRevealed(true)
				}}
			>
				Reveal
			</button>
		);
}
