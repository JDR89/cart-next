"use client";
import { useCartContext } from "@/components/context/CartContext";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

const QtyCounter = ({ product }) => {
  const { isInCart, cart } = useCartContext();

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const remove = () => {
    setCounter(counter - 1);
  };

  const addProductWithQty = (qty) => {
    isInCart(product, qty);
    setCounter(0)
     
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <h4>Cantidad</h4>

        <div className="mb-2">
          <button
            disabled={product.inStock <= counter}
            onClick={add}
            className="btn-xs btn-circle bg-[#bebebe] hover:bg-primary hover:text-white"
          >
            +
          </button>

          <span className="mx-5">{counter}</span>
          <button
            disabled={counter <= 0}
            onClick={remove}
            className="btn-xs btn-circle bg-[#bebebe] hover:bg-primary hover:text-white"
          >
            -
          </button>
        </div>

        <button
          disabled={counter <= 0}
          onClick={() => addProductWithQty(counter)}
          className="mt-9 btn btn-outline hover:bg-primary "
        >
          Agregar al carrito
        </button>

        <div className="w-full flex justify-between mt-5 mx-auto gap-1">
          {cart.length >= 1 && (
            <>
              <Link href={"/shop/cart"} className="btn btn-outline  w-1/2">
                Ir al carrito
              </Link>
              <Link
                href={"/shop/productos/todo"}
                className="btn btn-outline w-1/2"
              >
                Ver mas productos
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default QtyCounter;
