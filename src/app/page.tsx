import CatGenerator from "./_component/cat-generator";

export default function Home() {
	return (
		<main className="flex h-screen w-screen items-center justify-center">
			<div className="flex flex-col gap-y-4 w-fit items-center">
				<CatGenerator />
				<CatGenerator />
				<CatGenerator />
				<CatGenerator />
			</div>
		</main>
	);
}
