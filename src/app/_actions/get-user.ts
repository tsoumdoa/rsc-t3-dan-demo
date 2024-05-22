"use server";

export const getUser = async () => {
	console.log("getUser called")
	return { name: "John" }
}
