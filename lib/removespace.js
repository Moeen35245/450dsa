export function removeSpaces(string) {
  if (string.includes("&")) {
    let newString = string.replace(/ /g, "");
    newString = newString.replace("&", "");
    return newString;
  }
  if (string.includes(" ")) {
    return string.replace(/ /g, "");
  }
  return string;
}
