
import { useAuthContext } from "../context/AuthContext";


const Navbar = () => {

  const{user,logout}=useAuthContext()

  return (
    <nav className={`p-4 relative shadow-md  ${!user.isAdmin && "py-6"}`}>
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-bold">
          TecnoShop 
        </h1>


      {
        user.isAdmin  && (
          <div className="flex justify-normal">
         
         <button onClick={logout} className={` btn btn-error `}>Salir</button>
         
         </div>
        )
      }   

      </div>
    </nav>
  );
};

export default Navbar;
