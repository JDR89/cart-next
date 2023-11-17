import{ NextResponse } from "next/server"
import productos from "@/data/products.json"

export const GET = async(request,{params}) => {
    const {slug} = params
    
    const items = productos.mockData

    const item = items.find(e=>e.slug === slug)


   return NextResponse.json(item)
}