export function currencyFormatter(amout: number): string {
  const formatted = amout.toLocaleString("es-ES");
  return "$" + formatted;
}
