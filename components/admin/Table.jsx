

import TableItems from "./TableItems";



const Table = async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/productos/todo`, {
      next: { revalidate: 0 } , 
      
    });
    const items = await response.json();

   
  
    return (
      <div className="overflow-x-auto min-h-[90vh] mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Producto</th>
              <th>slug</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Stock</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            
              <TableItems items={items}/>
            
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return <div className="min-h-screen flex justify-center">Error al cargar los datos</div>;
  }
 
 
};

export default Table;
