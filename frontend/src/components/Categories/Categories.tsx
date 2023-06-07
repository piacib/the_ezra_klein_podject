import useCategories from "./useCategories";
import {
  BubbleLink,
  CategoriesContainer,
  CategoryLink,
  LinkWrapper,
} from "./Categories.styles";
import paths, { pathGenerator } from "../../router/paths";
interface Props {
  list: string[];
}
const Categories = ({ list }: Props) => {
  const categoryList = useCategories(list);
  return (
    <CategoriesContainer>
      {categoryList.map((x) => (
        <BubbleLink to={pathGenerator.categories(x)} key={x}>
          {x}
        </BubbleLink>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
