const Table = async() => {
  
  const response = await fetch("http://localhost:3000/api/productos/todo",{
    next:{ revalidate : 0} 
  })
  const items = await response.json()

  

  return (
    <div className="overflow-x-auto min-h-[90vh]">
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
          
            {
              items.map((e)=>(
                <tr key={e.slug}>
                <td>{e.title}</td>
                <td>{e.slug}</td>
                <td>{e.description}</td>
                <td>{e.image}</td>
                <td>{e.inStock}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
                <td className=""><button className="mr-2">Edit</button><button>X</button></td>
                </tr>
              ))
            }

          

        </tbody>
      </table>
    </div>
  );
};

export default Table;
