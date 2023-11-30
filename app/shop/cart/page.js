import OrderCardCart from "@/components/shop/cart/OrderCardCart";
import ProductCardCart from "@/components/shop/cart/ProductCardCart";
import { Suspense } from "react";


const page = () => {



  return (
    <div className="container mx-auto">
      <h1 className="mt-5 font-semibold text-3xl">Cart</h1>
    <div className="flex flex-col md:flex-row min-h-screen mt-2 md:mt-5">
      
      
      <div className="w-full md:w-1/2 p-4">
        <Suspense fallback={<div className="skeleton w-32 h-32"></div>}>
          <ProductCardCart />
        </Suspense>
      </div>



      <div className=" w-full md:w-1/2 p-4 mt-4 md:mt-0 ">
        <Suspense
          fallback={
            <div className="flex flex-col gap-4 w-52">
              <div className="flex gap-4 items-center">
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-4">
                  <div className="skeleton h-4 w-20"></div>
                  <div className="skeleton h-4 w-28"></div>
                </div>
              </div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          }
        >
          <OrderCardCart />
        </Suspense>
      </div>
    </div>

    </div>
  );
};

export default page;
