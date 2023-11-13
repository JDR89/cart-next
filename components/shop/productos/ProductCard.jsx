import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ products }) => {


  return (
    <div className="card card-compact max-w-96  bg-base-100 mx-5">
      <figure className="bg-base-200">
        <Image
          src={products.image}
          className="p-1 w-full"
          alt="imagen producto"
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{products.title}</h2>
        <p>{products.description}</p>
        <div className="card-actions justify-center ">
          <Link className="btn btn-primary w-2/3" href={`/shop/productos/detalle/${products.slug}`}>
            <button>Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
