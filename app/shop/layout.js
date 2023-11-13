
import Navbar from "../../components/shop/productos/Navbar";




export default function ShopLayout({ children }) {
    return (
      
        <div >
          <Navbar/>
          {children}
          
        </div>
      
    )
  }