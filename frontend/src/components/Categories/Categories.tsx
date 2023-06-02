import useCategories from "./useCategories";
import { CategoriesContainer, CategoryLink } from "./Categories.styles";
import paths from "../../router/paths";
interface Props {
  list: string[];
}
const Categories = ({ list }: Props) => {
  const categoryList = useCategories(list);
  return (
    <CategoriesContainer>
      {categoryList.map((x) => (
        <CategoryLink to={paths.categoriesGenerator(x)} key={x}>
          {x}
        </CategoryLink>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
