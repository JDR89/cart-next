import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const getOrders = async () => {
  const ordersRef = collection(db, "orders");
  const querySnapshot = await getDocs(ordersRef);
  const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return docs;
};

const Orders = async () => {
  const orders = await getOrders();

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
