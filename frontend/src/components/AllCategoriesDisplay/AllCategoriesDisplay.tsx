import { alldata } from "../../alldata";
import Categories from "../Categories/Categories";
const categoryList = Object.values(alldata)
  .filter((x) => x.categories)
  .map((x) => x.categories)
  .flat(1) as string[];

const AllCategoriesDisplay = () => {
  return (
    <div>
      <Categories list={categoryList} />{" "}
    </div>
  );
};

export default AllCategoriesDisplay;
