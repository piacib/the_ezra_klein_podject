const paths = {
  table: "table",
  randombook: "randombook",
  home: "",
  books: "books",
  bookpage: "book/:id",
  bookpageGenerator: (id: string) => `/book/${id}`,
  categories: "category/:id",
  categoriesGenerator: (id: string) => `/category/${id}`,
};
export default paths;
