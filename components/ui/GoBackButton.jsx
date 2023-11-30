"use client";
import { useRouter } from "next/navigation";

const GoBackButton = ({className,text = "Volver", ...args}) => {
  const router = useRouter();
  return (
    <button {...args} onClick={() => router.push("/shop/productos/todo")} className={`btn  btn-primary ${className}`}>
      {text}
    </button>
  );
};

export default GoBackButton;
