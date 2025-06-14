export const getCapitals = (str: string) =>
	str
		.split(" ")
		.map((el) => el[0])
		.join("")
		.toLocaleUpperCase();
