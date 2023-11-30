
import Link from "next/link";
import CartWidget from "./CartWidget";


const Navbar = () => {
  

  return (
    <nav
      className={`p-4 relative shadow-md`}
    >
      <div className="flex items-center justify-between">
        <Link href={"/"} className=" text-2xl font-bold">
          TecnoShop
        </Link>

        {/* MENU */}
        
          <div>
            <div className="hidden md:flex space-x-4">
              <Link
                className="hover:bg-neutral-content px-2 py-1 rounded"
                href="/shop/productos/todo"
              >
                Productos
              </Link>
              <Link
                className="hover:bg-neutral-content px-2 py-1 rounded"
                href="/shop/nosotros"
                
              >
                Nosotros
              </Link>
            </div>
            <div className="md:hidden flex items-center">
            
              <div className="dropdown dropdown-bottom dropdown-end  ml-24">
                <button tabIndex={0} className=" ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-30"
                >
                  <li >
                    <Link href={"/shop/productos/todo"}>Productos</Link>
                  </li>
                  <li>
                    <Link href={"/shop/nosotros"}>Nosotros</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
       

        {/* VISTA CARRITO */}
         <CartWidget/>
       
      </div>

    </nav>
  );
};

export default Navbar;
