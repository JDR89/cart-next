
import Link from "next/link";


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
            
              <div className="dropdown ml-24">
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
          <div className="flex">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">0 Items</span>
                  <span className="text-info">Subtotal: $0</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </div>

    </nav>
  );
};

export default Navbar;
