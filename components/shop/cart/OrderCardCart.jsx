"use client"
import { useCartContext } from "@/components/context/CartContext"



const OrderCardCart = () => {

  const{cart}=useCartContext()

  const totalQty = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + item.qty * item.price, 0);

  return (
    <div  className="mx-auto card max-w-[30rem] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Order</h2>
            <hr />

            <div className="flex justify-between">
              <p>N° de productos</p>
              <span>{totalQty}</span>
            </div>

            <div className="flex justify-between">
              <h3>Total:</h3>
              <span>${totalPrice}</span>
            </div>

            <div className="card-actions ">
              <button className="btn btn-primary w-full mt-3">Comprar</button>
            </div>
          </div>
        </div>
  )
}

export default OrderCardCart