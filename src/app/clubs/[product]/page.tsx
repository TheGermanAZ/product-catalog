import React from "react";
import { ProductInfo } from "@/components/ui/product-info";

type Props = {};

const club = ({ params }: { params: { product: string } }): JSX.Element => {
  const _product = params.product.split("-").join(" ");
  const [product, id] = _product.split("_").join(" ");
  const id1 = params.product.split("_").at(-1) as string;
  const product1 = _product.split("_").at(0) as string;
  return <ProductInfo product={product} id={id} />;
};

export default club;
