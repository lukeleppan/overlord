export function identifierFromTitle(title: string): string {
  return title
    .replace(/[^a-zA-Z ]/g, '') // Remove all characters except letters and spaces
    .toLowerCase() // Convert to lower case
    .replace(/\s+/g, '-'); // Replace spaces with hyphens
}
