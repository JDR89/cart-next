"use client"
import { useState } from "react"


const QtyCounter = () => {

  const [counter, setCounter] = useState(1)

  const add =()=>{
    setCounter(counter + 1)
  }

  const remove =()=>{
    setCounter(counter - 1)
  }

  return (
   <>
    <div className="flex flex-col">
        <h4>Cantidad</h4>

        <div className="mb-2">
        <button onClick={add} className="btn-xs btn-circle bg-[#bebebe]">+</button>
        <span className="mx-5">{counter}</span>
        <button disabled={counter <= 1} onClick={remove} className="btn-xs btn-circle bg-[#bebebe]">-</button>
        </div>

        <button className="btn-sm rounded bg-primary text-white w-[15rem]">Agregar al carrito</button>
        
    </div>
   </>

  )
}

export default QtyCounter