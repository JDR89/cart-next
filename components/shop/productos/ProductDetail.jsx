import Image from "next/image";
import QtyCounter from "./QtyCounter";

const ProductDetail = ({product}) => {

  

  return (
    <div  className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
      <Image
          src={product.image}
          className="p-1 w-full"
          alt="imagen producto"
          width={400}
          height={400}
          priority={true}
        />
        <div>
          <h2 className="text-5xl font-bold">{product.title}</h2>
          <div className="py-6">
            <p className="mb-1">{product.description} </p> 
            <span>{product.price} USD</span>
          </div>
          
          <QtyCounter/>
          
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
