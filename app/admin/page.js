import Table from "@/components/admin/Table";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      <div className="flex justify-between ">
      <div className="flex justify-start ml-4 mt-4 ">
      <h1 className="text-2xl font-semibold  ">Dashboard</h1>
      </div>
      <div className="flex justify-center mt-5 mb-5  md:mt-5 md:mr-8 ">
        <Link href={"/admin/create"}>
          
          <button className="btn btn-success mr-2 ">Agregar</button>
        </Link>
      </div>
      </div>
      <Table />
    </div>
  );
};

export default DashboardPage;
