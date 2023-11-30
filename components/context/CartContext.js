"use client"
import { createContext, useContext, useState }  from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider =({children})=>{

    const [cart, setCart] = useState([{
        "slug": "raton-microsoft-arc-mouse",
        "image": "/products/mouse.webp",
        "description": "Ratón inalámbrico compacto para portátil",
        "title": "Ratón Microsoft Arc Mouse",
        "category": "mouses",
        "price": 120,
        "inStock": 11,
        "qty":1
      },
      {
        "slug": "raton-hp-wired-mouse",
        "image": "/products/mouse.webp",
        "description": "Ratón ergonómico con cable para uso diario",
        "title": "Ratón HP Wired Mouse",
        "category": "mouses",
        "price": 90,
        "inStock": 4,
        "qty":2
      }])
    

    const deleteItem=(slug)=>{
        const arrCart = structuredClone(cart)
        const newCart = arrCart.filter(e=>e.slug !== slug)
        setCart(newCart)
    }

    const isInCart =(item,qty)=>{
       const arrCart = structuredClone(cart)
       const findIndex = arrCart.findIndex(e => e.slug === item.slug)
       
       if(findIndex === -1){

        const newItem ={
            ...item,
            qty
        }

        setCart([...arrCart,newItem])

       }else{

        const item = arrCart[findIndex];
        item.qty += qty;
      
        setCart(arrCart);
       }
    }

    


    return(
        <CartContext.Provider value={{
            isInCart,
            deleteItem,
            cart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
