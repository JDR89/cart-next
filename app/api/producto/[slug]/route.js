import{ NextResponse } from "next/server"
import {doc, getDoc} from "firebase/firestore"
import { db } from "@/firebase/config"

export const GET = async(request,{params}) => {

    try {
        const {slug} = params
    
        const docRef = doc(db,"productos",slug)
    
        const docSnapshot = await getDoc(docRef)
    
        return NextResponse.json(docSnapshot.data())
    } catch (error) {
        return NextResponse.json({ error: "Hubo un error en la solicitud GET." }, { status: 500 });
    }

}