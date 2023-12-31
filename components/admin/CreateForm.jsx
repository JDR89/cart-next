"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db, storage } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const createProduct = async (values, file) => {
  const storageRef = ref(storage, values.slug);
  const fileSnapShot = await uploadBytes(storageRef, file);

  const fileURL = await getDownloadURL(fileSnapShot.ref);

  const docRef = doc(db, "productos", values.slug);
  return setDoc(docRef, {
    ...values,
    image: fileURL,
  }).then(() => console.log("producto agregado"));
};

const CreateForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    slug: "",
    description: "",
    price: Number(0),
    inStock: Number(0),
    title: "",
    category: "",
  });

  const [file, setFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createProduct(values, file)
      .then(() => router.push("/admin"))
      .then(() => router.refresh());
    setLoading(false);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    const updatedValue =
      name === "inStock" || name === "price" ? parseFloat(value) : value;
    setValues({
      ...values,
      [name]: updatedValue,
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={onSubmit} className="card-body gap-3">
          <h2 className="flex justify-center text-xl font-medium">
            Agrega un nuevo producto
          </h2>
          <div className="form-control">
            <label className="ml-2 text-sm">Producto</label>
            <input
              type="text"
              placeholder="Producto"
              className="input input-bordered"
              value={values.title}
              name="title"
              onChange={onChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Slug</label>
            <input
              type="text"
              placeholder="Slug"
              className="input input-bordered"
              value={values.slug}
              name="slug"
              onChange={onChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Descripción</label>
            <textarea
              type="text"
              placeholder="Descripción"
              className="textarea textarea-bordered"
              value={values.description}
              name="description"
              onChange={onChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Categoría</label>
            <select
              onChange={onChange}
              value={values.category}
              name="category"
              className="select select-bordered w-full max-w-xs"
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
              value={values.inStock}
              name="inStock"
              onChange={onChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="ml-2 text-sm">Precio</label>
            <input
              type="number"
              placeholder="Precio"
              className="input input-bordered"
              value={values.price}
              name="price"
              onChange={onChange}
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
            {loading ? (
              <div className="flex justify-center flex-col items-center ">
                <h4>Redirigiendo al dashboard</h4>
                <span className="loading loading-dots loading-md "></span>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            )}
          </div>
          {loading ? (
            <></>
          ) : (
            <Link href={"/admin"}>
              <button className="btn btn-outline btn-error w-full">
                Cancel
              </button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
