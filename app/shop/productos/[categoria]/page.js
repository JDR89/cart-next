
import ProductCard from "@/components/shop/productos/ProductCard";


export const generateMetadata=async({params}, parent)=>{

  return{
    title:`TecnoShop - ${params.categoria}`,
  }
    
}



// export const revalidate = 3600


const CategoriaPage = async({ params }) => {
  const { categoria } = params
  
try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/productos/${categoria}`,{
    next:{
      revalidate:0
    }
  })
  const products = await response.json()

  

  return (
    <>
    
      {products.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mt-14">

          {products.map((prod) => (
            
              <ProductCard key={prod.slug} products={prod} />
            
          ))}

        </div>

      ) : (
        <div className="flex justify-center">
          <h2 className="uppercase text-2xl md:text-5xl mt-40 mb-[20vh]">
            Producto no encontrado...
          </h2>
        </div>
        
      )}
      
    </>
  );
} catch (error) {
  console.error('Error al obtener los datos:', error);
  return <div>Error al cargar los datos</div>;
}
 
};

export default CategoriaPage;
