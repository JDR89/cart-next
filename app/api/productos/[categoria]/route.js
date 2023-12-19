
import { NextResponse } from "next/server";
import { collection,getDocs,query, where } from "firebase/firestore";
import { db } from "@/firebase/config";


export const GET = async(request,{params}) => {

    try {
        const {categoria}=params

        const productosRef = collection(db,"productos")
    
        const q = categoria === "todo"
                        ? productosRef
                        : query(productosRef,where("category","==",categoria))
    
        const querySnapshot= await getDocs(q)    
        
        const docs = querySnapshot.docs.map(doc => doc.data())
    
        return NextResponse.json(docs)
    } catch (error) {
        console.error("Error en la solicitud GET:", error);

        // Puedes retornar una respuesta personalizada en caso de error, por ejemplo:
        return NextResponse.json({ error: "Hubo un error en la solicitud GET." }, { status: 500 });
    }

    
}