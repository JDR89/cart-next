import productos from "@/data/products.json";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const sleep=async(timer) = new Promise((resolve)=>setTimeout(resolve,timer))

export const GET = async(request,{params}) => {
    const {categoria}=params

    
    const items = productos.mockData

    const filterProducts = categoria === "todo"
                          ? items
                          : items.filter(e=>e.category === categoria)

    
    await sleep(1000)

    revalidateTag("productos")

    return NextResponse.json(filterProducts)
}