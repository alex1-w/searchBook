export const queryResolver = (category?: string, text?: string) => {
  if (category && text) return `${text}+subject:${category}`;
  if (category && !text) return `all+subject:${category}`
  if (!category && text) return `${text}`
  return `all`
};
