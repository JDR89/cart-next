import ProductDetail from "@/components/shop/productos/ProductDetail"


export const metadata={
  title:"TecnoShop -  Detalle",
  description:"Productos tecnologicos"
}

const DetailPage = async ({params}) => {
  const {slug} = params

  const response = await fetch(`http://localhost:3000/api/producto/${slug}`,{
    next:{
      revalidate:0
    }
  })
  const product = await response.json()
 


  
  return (
    <>
      <ProductDetail key={product.slug} product={product}/>
   </>
  )
}



export default DetailPage