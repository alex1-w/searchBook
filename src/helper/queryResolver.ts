// export const queryResolver = (query: any): string => {
//   if (query.filter.category) {
//     return `${query.text}+subject:${query.filter.category}`;
//   }
//   return query.text;
// };
export const queryResolver = (query: any): string => {
  if (query.category && query.text) {
    return `${query.text}+subject:${query.category}`;
  }
  if (query.category && !query.text) {
    return `all subject:${query.category}`;
  }
  return query.text;
};
