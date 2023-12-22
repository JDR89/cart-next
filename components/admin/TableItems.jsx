
import Image from "next/image"
import Link from "next/link"




const TableItems = ({items}) => {



  return (
    <>
    {items.map((e) => (
              <tr key={e.slug}>
                <td>{e.title}</td>
                <td>{e.slug}</td>
                <td>{e.description}</td>
                <td>
                  <Image
                    width={80}
                    height={80}
                    src={e.image}
                    alt="image product"
                  />
                </td>
                <td>{e.inStock}</td>
                <td>{e.category}</td>
                <td>{e.price}</td>
                <td className="">
                  <Link
                    href={`/admin/edit/${e.slug}`}
                    className="rounded bg-success p-2 text-black mr-1"
                  >
                    Editar
                  </Link>
  
                </td>
              </tr>
            ))}
    </>
  )
}

export default TableItems