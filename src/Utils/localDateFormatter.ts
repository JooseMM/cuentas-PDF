export function localDateFormatter(date: Date): string {
  const formattedDate = date.toLocaleString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const charToUppercase = formattedDate.charAt(0).toUpperCase();
  return charToUppercase.concat(formattedDate.slice(1));
}
