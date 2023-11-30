"use client";
import { useCartContext } from "@/components/context/CartContext";

const ProductCardCart = () => {
  const { cart,deleteItem } = useCartContext();

  return (
    <ul>
      {cart.map((e) => (
        <li
          key={e.slug}
          className="mx-auto card card-side bg-base-100 max-h-[15rem] max-w-2xl mt-3 shadow-sm"
        >
            
          <figure>
            <img
              src={e.image}
              className="w-[100px] h-[100px] bg-cover "
              alt="item"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center ">
              <h2 className=" text-[16px] font-medium sm:card-title">{e.title} <span className="text-[15px] font-normal">x{e.qty}</span></h2>
              <span className="font-semibold">${e.price}</span>
            </div>

            <div className="flex justify-between items-center">
              <p>{e.description}</p>
              <button
              onClick={()=>deleteItem(e.slug)}
              className="btn btn-xs btn-circle btn-outline hover:bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductCardCart;
