"use client"
import { useCartContext } from "@/components/context/CartContext"
import { useState } from "react"



const QtyCounter = ({product}) => {
  
  const{isInCart} =useCartContext()

  const [counter, setCounter] = useState(0)

  // CONTADOR
  const add =()=>{
    setCounter(counter + 1)
  }

  const remove =()=>{
    setCounter(counter - 1)
  }
  // FIN CONTADOR


  const addProductWithQty=(qty)=>{
    isInCart(product,qty)
    setCounter(0)
  }


  return (
   <>
    <div className="flex flex-col">
        <h4>Cantidad</h4>
        

        <div className="mb-2">

        <button disabled={product.inStock <= counter}
                onClick={add} 
                className="btn-xs btn-circle bg-[#bebebe] hover:bg-primary hover:text-white"
        >
          +
        </button>

        <span className="mx-5">{counter}</span>
        <button disabled={counter <= 0} onClick={remove} className="btn-xs btn-circle bg-[#bebebe] hover:bg-primary hover:text-white">
          -
          </button>
        </div>

        <button disabled={counter <= 0} onClick={()=>addProductWithQty(counter)} className="mt-9 btn btn-outline hover:bg-primary ">Agregar al carrito</button>
        
    </div>
   </>

  )
}

export default QtyCounter