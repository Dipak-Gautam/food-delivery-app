import productDataProp from "../schema/ProductData/productData.schema";

function searchFunction(
  items: productDataProp[],
  query: string
): productDataProp[] {
  const lowerCaseQuery = query.toLowerCase();
  return items.filter((item) =>
    item.name.toLowerCase().startsWith(lowerCaseQuery)
  );
}

export default searchFunction;
