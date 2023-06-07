export type PathObject = {
  table: string;
  randombook: string;
  home: string;
  books: string;
  bookpage: string;
  categories: string;
  allcategories: string;
};

const bookPageBase = "book";
const categoryBase = "category";

const paths: PathObject = {
  table: "table",
  randombook: "randombook",
  home: "",
  books: "books",
  bookpage: `${bookPageBase}/:id`,
  categories: `${categoryBase}/:id`,
  allcategories: categoryBase,
};
export type PathGenerator = (id: string) => string;
export const pathGenerators: { [k in string]: PathGenerator } = {
  bookpage: (id: string) => `/${bookPageBase}/${id}`,
  categories: (id: string) => `/${categoryBase}/${id}`,
};
export default paths;
