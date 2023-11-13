"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductosLayout = ({ children }) => {
  const pathname = usePathname();

  const isInDetail = pathname.includes("detalle");

  const titleName = () => {
    if (pathname === "/shop/productos/teclados") {
      return "Teclados";
    }
    if (pathname === "/shop/productos/mouses") {
      return "Mouses";
    }
    if (pathname === "/shop/productos/camaras") {
      return "Camaras";
    }
    if (pathname === "/shop/productos/auriculares") {
      return "Auriculares";
    } else {
      return "Productos";
    }
    
  };

  const title = titleName()

  return (
    <>
      {!isInDetail && (
        <div>
          <div
            className="hero min-h-[40vh]"
            style={{
              backgroundImage: `url("/ui/fondoHeroProducts.webp")`,
            }}
          >
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-12 text-5xl md:text-6xl font-bold text-primary-focus uppercase">
                  {title}
                </h1>
                <p className="mb-5 text-accent-content ">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="  bg-primary-content shadow">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details className="md:ml-48">
                    <summary className="uppercase font-semibold  ">
                      Ordenar por:
                    </summary>
                    <ul className="z-[1] p-2 bg-base-100 ">
                      <li>
                        <Link href={"/shop/productos/todo"}>Todo</Link>
                      </li>
                      <li>
                        <Link href={"/shop/productos/auriculares"}>
                          Auriculares
                        </Link>
                      </li>
                      <li>
                        <Link href={"/shop/productos/camaras"}>Camaras</Link>
                      </li>
                      <li>
                        <Link href={"/shop/productos/mouses"}>Mouses</Link>
                      </li>
                      <li>
                        <Link href={"/shop/productos/teclados"}>Teclados</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {children}
    </>
  );
};

export default ProductosLayout;
