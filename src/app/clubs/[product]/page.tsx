import React from "react";
import { ProductInfo } from "@/components/ui/product-info";

type Props = {};

const club = ({ params }: { params: { product: string } }): JSX.Element => {
  const _product = params.product.split("-").join(" ");
  const id = params.product.split("_").at(-1) as string;
  const product = _product.split("_").at(0) as string;
  return <ProductInfo product={product} id={id} />;
};

export default club;
