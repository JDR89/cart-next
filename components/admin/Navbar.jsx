"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";


const Navbar = () => {
  const pathname = usePathname()
  const isPathname = pathname === "/admin"
  const{user,logout}=useAuthContext()

  return (
    <nav className={`p-4 relative shadow-md  ${user.logged ? "py-4" : "py-6"}`}>
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-bold">
          TecnoShop {isPathname && "/ Dashboard"}
        </h1>


      {
        user.logged && (
          <div className="flex justify-normal">
          <Link href={"/admin/create"}>  <button className="btn btn-success mr-2">Agregar</button></Link>
         <button onClick={logout} className="btn btn-error">Salir</button>
         
         </div>
        )
      }   

      </div>
    </nav>
  );
};

export default Navbar;
