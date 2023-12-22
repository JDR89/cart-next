import Image from "next/image";
import QtyCounter from "./QtyCounter";
import { Suspense } from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Suspense
          fallback={<span className="loading loading-dots loading-xs"></span>}
        >
          <Image
            src={product.image}
            className="p-1 w-full"
            alt="imagen producto"
            width={400}
            height={400}
            priority={true}
          />
        </Suspense>
        <div>
          <h2 className="text-5xl font-bold">{product.title} <span className=" badge badge-accent badge-outline text-sm ml-auto ">Stock:{product.inStock}</span></h2>
          <div className="py-6">
            <p className="mb-1">{product.description} </p>
            <span>{product.price} USD</span>
          </div>

          <hr />

          <QtyCounter product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
