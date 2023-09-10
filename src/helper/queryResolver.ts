export const queryResolver = (query: any): string => {
  if (query.filter.category) {
    return `${query.text}+subject:${query.filter.category}`;
  }
  return query.text;
};
