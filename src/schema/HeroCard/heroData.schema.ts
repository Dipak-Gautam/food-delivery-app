import productDataProp from "../ProductData/productData.schema";

export default interface heroDataProp {
  cardTitle: string;
  cardDescription: string;
  productData: productDataProp[];
}
