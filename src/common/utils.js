export function numToWon(number) {
  return String(number)
    .split("")
    .reverse()
    .map(
      (value, index, origin) =>
        (value =
          (index + 1) % 3 === 0 && index !== origin.length - 1
            ? "," + value
            : value + "")
    )
    .reverse()
    .join("");
}
