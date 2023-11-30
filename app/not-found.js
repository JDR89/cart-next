import GoBackButton from "@/components/ui/GoBackButton";


const NotFound = () => {
  
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[40vh]">
        <h1 className="text-3xl md:text-5xl">Página no encontrada</h1>
      </div>

      <div className="mb-[50vh]">
       <GoBackButton className={"mt-10"}/>
      </div>
    </div>
  );
};

export default NotFound;
