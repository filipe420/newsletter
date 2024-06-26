
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import FormEmail from "@/componetes/FormEmail";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
    <div className="h-[24rem] md:h-[28rem] w-full max-w-5xl bg-black rounded-lg flex flex-col md:flex-row items-center p-4">
      
      <div className="relative flex justify-center items-center bg-indigo-500 w-full md:w-1/3 min-h-[12rem] md:min-h-full rounded">
        <Image src="https://cdn-icons-png.flaticon.com/512/4939/4939994.png" alt="hero" layout="fill" objectFit="contain" className="rounded max-h-24 md:max-h-36 xl:max-h-48 mt-5 md:mt-16" />
      </div>

      <div className="w-full md:w-2/3 px-4 md:px-16 min-h-[12rem] md:min-h-full flex flex-col text-white justify-center items-center gap-5 text-center">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Se inscreva para receber novidades</h1>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl">Nunca mais se esqueça de comprar seus insumos semanais com qualidade de vida!</p>
        <FormEmail />
      </div>

    </div>
  </main>

  );
}
