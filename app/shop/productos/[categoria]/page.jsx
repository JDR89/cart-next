
import ProductCard from "@/components/shop/productos/ProductCard";
import productos from "@/data/products.json";


export const generateMetadata=async({params}, parent)=>{

  return{
    title:`TecnoShop - ${params.categoria}`,
  }
    
}


const CategoriaPage = ({ params }) => {
  const { categoria } = params
  const products = productos.mockData

  const filterProducts = categoria === "todo"
                          ? products
                          : products.filter(e=>e.category === categoria)

  
  return (
    <>
      {filterProducts.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mt-14">

          {filterProducts.map((prod) => (
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
