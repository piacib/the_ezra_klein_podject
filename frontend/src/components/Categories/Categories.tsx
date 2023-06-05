import useCategories from "./useCategories";
import {
  BubbleLink,
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
        <BubbleLink to={paths.categoriesGenerator(x)} key={x}>
          {x}
        </BubbleLink>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
