export function localDateFormatter(): string {
  const date = new Date();
  const formattedDate = date.toLocaleString("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const charToUppercase = formattedDate.charAt(0).toUpperCase();
  return charToUppercase.concat(formattedDate.slice(1));
}
