const paths = {
  table: "table",
  randombook: "randombook",
  home: "table",
  books: "books",
  categories: "category/:id",
  categoriesGenerator: (id: string) => `/category/${id}`,
};
export default paths;
