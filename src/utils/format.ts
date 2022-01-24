export function capitalizeFirstetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function capitalize(text: string) {
  return text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
}
