import ProductDetail from "@/components/shop/productos/ProductDetail"


export const generateMetadata=async({params}, parent)=>{

  return{
    title:`TecnoShop - ${params.slug}`,
  }
    
}

const DetailPage = async ({params}) => {
  try {
    const {slug} = params

  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/producto/${slug}`,{
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
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return <div>Error al cargar los datos</div>;
  }
}



export default DetailPage