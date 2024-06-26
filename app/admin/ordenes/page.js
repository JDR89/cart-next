"use client"
import { db } from "@/firebase/config";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { RiDeleteBin5Fill } from "react-icons/ri";





const Orderpage = async () => {

  const router = useRouter();
  const getOrders = async () => {
    const ordersRef = collection(db, "orders");
    const querySnapshot = await getDocs(ordersRef);
    const docs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    return docs;
  };
  
  const orders = await getOrders();

  
  const deleteOrder = async (date) => {
    
    try {
      const ordersRef = collection(db, "orders");
      const querySnapshot = await getDocs(ordersRef);

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.date === date) {
          deleteDoc(doc.ref);
          console.log("Documento eliminado:", doc.id);
        }
      });
    } catch (error) {
      console.error("Error al eliminar el documento:", error);
    }

    router.refresh()
  };

  return (
    <div className="overflow-x-auto min-h-[90vh] mx-auto mt-5">
      <div className="flex justify-end mr-5">
        <Link className="btn btn-outline" href={"/admin"}>Volver</Link>
      </div>
      
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Comprador</th>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

          {orders.map((e) => (
            <tr key={e.date}>
              <td>{e.client.email}</td>
              <td>{e.date}</td>
              <td>
                {e.items.map((e) => (
                  <div key={e.title} className="flex justify-center flex-col">
                    <span key={e.date}>{e.title}</span>
                  </div>
                ))}
              </td>

              <td>
                {e.items.map((e) => (
                  <div key={e.title} className="flex justify-center flex-col">
                    <span key={e.date}>{e.qty}</span>
                  </div>
                ))}
              </td>

              <td>
                {
                  e.items.reduce((acc, item) => acc + item.total, 0)
                }
              </td>

              <td>
                {e.client.direccion}
              </td>

              <td>
                {e.client?.telefono}
              </td>

              <td>
                <button onClick={() => deleteOrder(e.date)}>
                 <RiDeleteBin5Fill size={20} />

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orderpage;
