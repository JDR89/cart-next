"use client";

import { useAuthContext } from "@/components/context/AuthContext";
import { useCartContext } from "@/components/context/CartContext";
import { useState } from "react";

const OrderForm = () => {
  const { user } = useAuthContext();
  const { cart } = useCartContext();

  const [values, setValues] = useState({
    direccion: "",
    email: "",
    uid: "",
    telefono: 0,
  });

  return (
    <div className="w-full mt-2">
      {cart.length >= 1 && (
        <div>
          <input
            type="text"
            placeholder="Dirección de envío"
            className="input input-bordered input-primary w-full "
          />

          <input
            type="number"
            placeholder="Telefono de contacto"
            className="input input-bordered input-primary w-full md:w-1/2 mt-2 "
          />

          <div className="mt-2">
            <div className="label ">
              <span className="label-text text-xs">
                Enviaremos link de pago al siguiente email:
              </span>
            </div>
            <input
              type="text"
              placeholder={user.email}
              className="input input-bordered w-full "
              disabled
            />
          </div>
        </div>
      )}

      <button
        className="btn btn-primary w-full mt-3"
        onClick={() => document.getElementById("my_modal_2").showModal()}
        disabled={cart.length <= 0}
      >
        Continuar compra
      </button>
    </div>
  );
};

export default OrderForm;
