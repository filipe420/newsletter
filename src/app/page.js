
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import FormEmail from "@/componetes/FormEmail";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
    <div className="h-[24rem] md:h-[28rem] p-2 md:p-5 w-full md:w-4/5 lg:w-3/5 xl:w-2/3 bg-black rounded-lg flex flex-col md:flex-row items-center">
  
      <div className="relative flex justify-center items-center bg-indigo-500 w-2/5 md:w-1/3 lg:w-2/5 xl:w-1/4 min-h-full rounded">
        <Image src="https://cdn-icons-png.flaticon.com/512/4939/4939994.png" alt="hero" layout="fill" objectFit="contain" className="rounded max-h-24 md:max-h-36 xl:max-h-48 mt-5 md:mt-16" />
      </div>
  
      <div className="w-3/5 md:w-2/3 lg:w-3/5 xl:w-3/4 px-4 md:px-16 min-h-full flex flex-col text-white justify-center items-center gap-5">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Se inscreva para receber novidades</h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-center">Nunca mais se esqueça de comprar seus insumos semanais com qualidade de vida!</p>
        <FormEmail />
      </div>
  
    </div>
  </main>
  );
}
