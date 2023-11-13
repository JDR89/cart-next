"use client";
import { useRouter } from "next/navigation";

const GoBackButton = ({className, ...args}) => {
  const router = useRouter();
  return (
    <button {...args} onClick={() => router.back()} className="btn mt-10">
      Volver
    </button>
  );
};

export default GoBackButton;
