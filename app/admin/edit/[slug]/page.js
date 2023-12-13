import EditForm from "@/components/admin/EditForm"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"


const page = async ({params}) => {

    const{slug}=params

    const docRef = doc(db,"productos",slug)
    const docSnapshot = await getDoc(docRef)

    const item = docSnapshot.data()
    
  return (
    <div className="min-h-screen mt-10 md:mt-16 mb-10">
        <EditForm item={item}/>
    </div>
    
  )
}

export default page