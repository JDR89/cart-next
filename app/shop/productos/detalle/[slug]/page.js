import ProductDetail from "@/components/shop/productos/ProductDetail"


export const generateMetadata=async({params}, parent)=>{

  return{
    title:`TecnoShop - ${params.slug}`,
  }
    
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