import Table from "@/components/admin/Table";
import Link from "next/link";
import { Suspense } from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between ">
      <div className="flex justify-start ml-4 mt-6">
      <h1 className=" text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex justify-center mt-5 mb-5  md:mt-5 md:mr-8 ">
        <Link href={"/admin/ordenes"}>
        <button className="btn btn-success mr-2 ">Ordenes</button>
        </Link>
        <Link href={"/admin/create"}>
          
          <button className="btn btn-success mr-2 ">Agregar</button>
        </Link>
      </div>
      </div>
      <div>
    <Suspense fallback={
      <>
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      </>
    
    }>
      <Table />
    </Suspense>
  </div>
    </div>
  );
};

export default DashboardPage;
