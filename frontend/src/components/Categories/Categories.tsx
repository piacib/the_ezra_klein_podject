import useCategories from "./useCategories";
import {
  CategoriesContainer,
  CategoryLink,
  LinkWrapper,
} from "./Categories.styles";
import paths from "../../router/paths";
interface Props {
  list: string[];
}
const Categories = ({ list }: Props) => {
  const categoryList = useCategories(list);
  return (
    <CategoriesContainer>
      {categoryList.map((x) => (
        <LinkWrapper>
          <CategoryLink to={paths.categoriesGenerator(x)} key={x}>
            {x}
          </CategoryLink>
        </LinkWrapper>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
