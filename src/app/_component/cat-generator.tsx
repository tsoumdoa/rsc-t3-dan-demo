"use server";

import { readFile } from "fs/promises";
import { RevealButtuon } from "./reveal-button";

export default async function CatGenerator() {
	const allCatNames = await readFile("cats.txt", "utf8");
	const cats = allCatNames.split("\n");
	cats.pop()
	const randomCat = cats[Math.floor(Math.random() * cats.length)];

	return (
		<RevealButtuon>
			<div className="text-4xl font-bold text-white text-center pb-1">
				{randomCat}
			</div>
		</RevealButtuon >
	)
}
