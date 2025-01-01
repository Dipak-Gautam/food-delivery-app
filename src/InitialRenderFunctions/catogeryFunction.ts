import productDataProp from "../schema/ProductData/productData.schema";

function filterByCategory(
  items: productDataProp[],
  category: string,
  sort: "price" | "rating" | "popularity" = "rating"
): productDataProp[] {
  let filteredItems = items.filter((item) => item.category === category);

  if (sort) {
    filteredItems = filteredItems.sort((a, b) => {
      if (sort === "rating") {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }
      return b[sort] - a[sort];
    });
  }

  return filteredItems;
}
export default filterByCategory;
