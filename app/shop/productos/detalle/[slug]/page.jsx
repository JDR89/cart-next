import ProductDetail from "@/components/shop/productos/ProductDetail"
import products from "@/data/products.json"

export const metadata={
  title:"TecnoShop -  Detalle",
  description:"Productos tecnologicos"
}

const DetailPage = ({params}) => {
  const {slug} = params
  const productos = products.mockData


  const productSelected = productos.find(prod => prod.slug === slug)
  
  return (
    <>
      <ProductDetail key={productSelected.slug} product={productSelected}/>
    </>
  )
}



export default DetailPage