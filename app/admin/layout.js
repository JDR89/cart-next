"use client"
import Navbar from "@/components/admin/Navbar";
import { useAuthContext } from "@/components/context/AuthContext";



export default function AdminLayout({ children,login }) {

    const{user}=useAuthContext()

    return (
      
        <div >
          <Navbar/>
          {
            user.logged
            ? children
            : login
          }
          
        </div>
      
    )
  }