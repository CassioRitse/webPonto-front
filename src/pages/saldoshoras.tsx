import Tabela from "@/Components/Tabela";
import { api } from "@/service/api";
import { useState } from "react";

interface DataSldos {
  extras: Array<Horario>;
  atrasos: Array<Horario>;
}

interface Horario {
  idhorario: string;
  entrada: string;
  saida: string;
}

export default function SaldosHoras(data: DataSldos) {
  const [view, setView] = useState(true);

  console.log(data);
  return (
    <main>
      <div className={`flex min-h-screen flex-col items-center`}>
        <div className="w-full text-center pt-8">
          <button
            onClick={() => setView(!view)}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:red-blue-500 rounded"
          >
            {view ? "Meus atrasos" : "Minhas extras"}
          </button>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl">
            {view ? "Tabela de extras" : "Tabela de atrasos"}
          </h1>
        </div>
        <div>
          {view ? (
            <Tabela
              data={...data.extras}
              coluna1="Chegou"
              coluna2="Entrada"
            ></Tabela>
          ) : (
            <Tabela
              data={...data.atrasos}
              coluna1="Saiu"
              coluna2="Saida"
            ></Tabela>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const extras = (await api.get("http://localhost:8080/apiPonto/horasExtra"))
    .data;
  const atrasos = (
    await api.get("http://localhost:8080/apiPonto/horasAtrasadas")
  ).data;

  return { props: { extras, atrasos } };
}
