
import ProductCard from "@/components/shop/productos/ProductCard";



export const generateMetadata=async({params}, parent)=>{

  return{
    title:`TecnoShop - ${params.categoria}`,
  }
    
}


const CategoriaPage = async({ params }) => {
  const { categoria } = params
  

  const response = await fetch(`http://localhost:3000/api/productos/${categoria}`,{
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
          <h2 className="uppercase text-3xl md:text-5xl mt-20">
            Producto no encontrado...
          </h2>
        </div>
      )}
    </>
  );
};

export default CategoriaPage;
