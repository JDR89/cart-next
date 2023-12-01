"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname()
  const isPathname = pathname === "/admin/dashboard"


  return (
    <nav className={`p-4 relative shadow-md  ${isPathname ? "py2" : "py-6"}`}>
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-bold">
          TecnoShop {isPathname && "/ Dashboard"}
        </h1>


      {
        isPathname && (
          <div className="flex justify-normal">
          <Link href={"/admin/dashboard/create"}>  <button className="btn btn-success mr-2">Agregar</button></Link>
         <Link href={"/admin"}><button className="btn btn-error">Salir</button></Link> 
         
         </div>
        )
      }   

      </div>
    </nav>
  );
};

export default Navbar;
