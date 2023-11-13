import Navbar from "@/components/admin/Navbar";

export const metadata = {
  title: 'TecnoShop dashboard',
  description: 'Dashboard',
  
}

export default function AdminLayout({ children }) {
    return (
      
        <div >
          <Navbar/>
          {children}
        </div>
      
    )
  }