import React, { useEffect, useState } from "react";

const useCategories = (categories: string[]) => {
  const categorySet = new Set<string>();
  const [categoryParsed, setCategoryParsed] = useState<string[]>([]);
  useEffect(() => {
    categories.forEach((category) => {
      const categorySplit = category.split("/");
      categorySplit.forEach((x) => categorySet.add(x.trim()));
    });
    setCategoryParsed(Array.from(categorySet));
  }, []);
  return categoryParsed;
};

export default useCategories;
