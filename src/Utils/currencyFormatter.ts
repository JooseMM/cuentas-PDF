export function currencyFormatter(amout: number): string {
  //console.log(`before ${amout}`);
  const formatted = amout.toLocaleString("es-ES");
  //console.log(`after ${formatted}`);
  return formatted;
}
