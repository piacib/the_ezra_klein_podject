import useCategories from "./useCategories";
import { CatagoriesContainer, CategoryLink } from "./Catagories.styles";
import paths from "../../router/paths";
interface Props {
  list: string[];
}
const Catagories = ({ list }: Props) => {
  const categoryList = useCategories(list);
  return (
    <CatagoriesContainer>
      {categoryList.map((x) => (
        <CategoryLink to={paths.categoriesGenerator(x)} key={x}>
          {x}
        </CategoryLink>
      ))}
    </CatagoriesContainer>
  );
};

export default Catagories;
