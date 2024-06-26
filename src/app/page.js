
import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import FormEmail from "@/componetes/FormEmail";
export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
    <div className="h-screen md:h-[28rem] p-5 w-full md:w-2/3 bg-black rounded-lg flex flex-col md:flex-row items-center">

        <div className="relative flex justify-center items-center bg-indigo-500 md:flex-2 min-h-full rounded">
            <Image src="https://cdn-icons-png.flaticon.com/512/4939/4939994.png" alt="hero" layout="fill" objectFit="contain" className="rounded max-h-36 md:max-h-full md:w-auto" />
        </div>

        <div className="flex-3 px-6 md:px-16 min-h-full flex flex-col text-white justify-center items-center gap-5">
            <h1 className="text-2xl md:text-3xl text-center">Se inscreva para receber novidades</h1>
            <p className="text-lg md:text-xl text-center">Nunca mais se esqueça de comprar seus insumos semanais com qualidade de vida!</p>
            <FormEmail />
        </div>

    </div>
</main>
  );
}
