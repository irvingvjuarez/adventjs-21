let expresion = /[\{\}\[\]]/gm;

export const isValid = (letter) => {
	if (!letter || typeof letter !== "string") throw new Error()

	const posibleGifts = letter.split("(");
  if (posibleGifts.some((item) => item.match(expresion))) return false;
  if (posibleGifts.some((item) => item.at(0) === ")")) return false;

  return posibleGifts.some((item) => item.includes(")"));
}