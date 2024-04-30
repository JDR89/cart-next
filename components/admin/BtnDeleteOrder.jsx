"use client"
import { db } from "@/firebase/config";
import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
export const BtnDeleteOrder = () => {

    // const deleteOrder = async (buyId) => {
    
    //     try {
    //       const ordersRef = collection(db, "orders");
    //       const querySnapshot = await getDocs(ordersRef);
    
    //       querySnapshot.forEach((doc) => {
    //         const data = doc.data();
    //         if (data.buyId === buyId) {
    //           deleteDoc(doc.ref);
    //           console.log("Documento eliminado:", doc.id);
    //         }
    //       });
    //     } catch (error) {
    //       console.error("Error al eliminar el documento:", error);
    //     }
    //   };
  return (
    <button
    
    >
      <FaRegTrashAlt size={20} />
    </button>
  );
};
