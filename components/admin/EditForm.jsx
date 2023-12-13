"use client";
import Link from "next/link";
import { useState } from "react";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject  } from "firebase/storage";
import { useRouter } from "next/navigation";




const updateProduct = async (slug, values, file) => {

    let fileURL = values.image

    if (file) {
        const storageRef = ref(storage, values.slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "productos", slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        inStock: values.inStock,
        price: values.price,
        category: values.category,
        image: fileURL
    })
        

}






const EditForm = ({ item }) => {
  const { title, description, inStock, price, category, image,slug } = item;

  const router = useRouter()

  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    category,
    image,
    slug
  });
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(item.slug, values, file);
  };


  const deleteItem=async(slug,image)=>{
    
    await deleteDoc(doc(db, "productos", slug))

    const desertRef = ref(storage, image);
     deleteObject(desertRef)
            
            
            
  }

  return (
    <div className="flex justify-center ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={onSubmit} className="card-body gap-3">
          <h2 className="flex justify-center text-xl font-medium">
            Editar producto
          </h2>
          <div className="form-control">
            <label className="ml-2 text-sm">Producto</label>
            <input
              type="text"
              placeholder="Producto"
              className="input input-bordered"
              onChange={onChange}
              required
              name="title"
              value={values.title}
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Slug</label>
            <input
              type="text"
              placeholder="Slug"
              className="input input-bordered"
              onChange={onChange}
              required
              name="slug"
              value={values.slug}
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Descripción</label>
            <textarea
              type="text"
              placeholder="Descripción"
              className="textarea textarea-bordered"
              onChange={onChange}
              required
              name="description"
              value={values.description}
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Categoría</label>
            <select
              onChange={onChange}
              className="select select-bordered w-full max-w-xs"
              name="category"
              value={values.category}
            >
              <option value="auriculares">Auriculares</option>
              <option value="camaras">Camaras</option>
              <option value="mouses">Mouses</option>
              <option value="teclados">Teclados</option>
            </select>
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Stock</label>
            <input
              type="number"
              placeholder="Stock"
              className="input input-bordered"
              onChange={onChange}
              name="inStock"
              value={values.inStock}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Precio</label>
            <input
              type="number"
              placeholder="Precio"
              className="input input-bordered"
              onChange={onChange}
              name="price"
              value={values.price}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Imagen</label>
            <input
              type="file"
              placeholder="Imagen"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={(e) => setFile(e.target.files[0])}
              allowmultiple="false"
            />
          </div>

          <div className="form-control mt-6">
            
            <button type="submit" className="btn btn-success">
              Editar
            </button>
            
          </div>
          </form>


          <div className="card-body">
          
            <button  onClick={() => document.getElementById("my_modal_5").showModal()}  className="btn btn-error" >
              Eliminar
            </button>
          
          <Link href={"/admin"} className="btn btn-outline   w-full mt-4 mb-8">
            Cancel
          </Link>
          </div>
      </div>



      {/* MODAL */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Desea eliminar el producto?</h3>
          
          <div className="modal-action flex justify-center">
            <form method="dialog">
              
              <button onClick={()=>deleteItem(slug,image)} className="btn bg-error">Eliminar</button>
            </form>
            <form method="dialog">
              <button className="btn">Cancelar</button>
             
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditForm;
