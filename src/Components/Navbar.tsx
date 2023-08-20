import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row flow-row ext-md justify-center font-bold m-0 p-1 bg-slate-100 text-blue-700">
      <Link
        href="meusHorarios"
        className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Meus Horários
      </Link>
      <Link
        href="/"
        className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Bater Ponto
      </Link>
      <Link
        href="saldoshoras"
        className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Meus Saldos
      </Link>
    </div>
  );
}
