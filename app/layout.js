import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/Footer'
import { CartProvider } from '@/components/context/CartContext'
import { AuthProvider } from '@/components/context/AuthContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TecnoShop',
  description: 'Productos tecnológicos',
  
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fantasy"  >
      <body className={`${inter.className} `}>
        <AuthProvider>
          <CartProvider>
           {children}
           <Footer/>
          </CartProvider>
        </AuthProvider>
      </body>
      
    </html>
  )
}
