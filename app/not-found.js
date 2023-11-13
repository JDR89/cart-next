import GoBackButton from "@/components/ui/GoBackButton";


const NotFound = () => {
  
  return (
    <div className="flex flex-col items-center">
      <div className="mt-20">
        <h1 className="text-3xl md:text-5xl">Página no encontrada</h1>
      </div>

      <div>
       <GoBackButton/>
      </div>
    </div>
  );
};

export default NotFound;
