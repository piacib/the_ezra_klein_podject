import paths, { PathObject, pathGenerators } from "./paths";

test("should have generator function for each dynamic path", () => {
  const pathKeys = Object.keys(paths) as (keyof PathObject)[];
  const dynamicPaths = pathKeys.filter((x) => paths[x].includes(":id"));
  const generatorFunctions = Object.keys(pathGenerators);
  expect(dynamicPaths.length).toBe(generatorFunctions.length);

  dynamicPaths.forEach((path) => {
    console.log(path);
    expect(generatorFunctions.includes(path)).toBeTruthy;
  });
});
