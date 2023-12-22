"use client";

import { useAuthContext } from "@/components/context/AuthContext";
import { useCartContext } from "@/components/context/CartContext";
import { useState } from "react";
import { db } from "@/firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"
import Swal from "sweetalert2";

const OrderForm = () => {
  const { user } = useAuthContext();
  const { cart,emptyCart } = useCartContext();
 

  const [values, setValues] = useState({
    direccion: "",
    email: user.email,
    telefono: 0,
  });

  const onChange=({target})=>{
    const{value,name}=target

    setValues({
      ...values,
      [name]: value
    })
  }

  
  

  const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            qty: item.qty,
            total: item.qty*item.price
        })),
        date: new Date().toISOString(),
        
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

  return docId
}

const onSubmit=async(e)=>{
  e.preventDefault()
  
    const result = await createOrder(values, cart);
    
    
    Swal.fire({
      title: "Su numero de compra es:",
      text: String(result),
    }).then(()=>emptyCart())
 
}


  

  return (
    <div className="w-full mt-2">
      {cart.length >= 1 && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Dirección de envío"
            className="input input-bordered input-primary w-full "
            name="direccion"
            value={values.direccion}
            onChange={onChange}
            required
          />

          
          <input
            type="number"
            placeholder="Telefono de contacto"
            className="input input-bordered input-primary w-full md:w-1/2 mt-2 "
            name="telefono"
            value={values.telefono}
            onChange={onChange}
            required
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
        </form>
      )}

      <button
        className="btn btn-primary w-full mt-3"
        onClick={onSubmit}
        disabled={cart.length <= 0 || values.direccion === "" || values.direccion.length <= 6 }
      >
        Continuar compra
      </button>
    </div>
  );
};

export default OrderForm;
