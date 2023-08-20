import CardFuncionario from "@/Components/CardFuncionario";
import FormHorario from "@/Components/FormHorario";
import Navbar from "@/Components/Navbar";
import Tabela from "@/Components/Tabela";
import { api } from "@/service/api";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface DataHome {
  data: Array<Horario>;
}

interface Horario {
  idhorario: string;
  entrada: string;
  saida: string;
}

export default function Home(props: DataHome) {
  async function handleLimparHorarios() {
    try {
      await api.put("baterPonto");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main>
      <div
        className={`flex min-h-screen flex-col items-center ${inter.className}`}
      >
        <h1 className="text-2xl text-center pt-8">Meu Ponto Digital</h1>
        <div>
          <CardFuncionario></CardFuncionario>
          <FormHorario acao="baterPonto" title="Bater Ponto"></FormHorario>
        </div>
        <div>
          {props.data.length == 0 ? (
            <div className="w-full text-center">
              Cadastre um horário primeiro
            </div>
          ) : (
            <div className="flex flex-col items-center mb-4">
              <Tabela {...props}></Tabela>
              <button
                onClick={() => handleLimparHorarios()}
                className="w-fit bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:red-blue-500 rounded"
              >
                Limpar Horários
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const data = (await api.get("http://localhost:8080/apiPonto/baterPonto"))
    .data;
  return { props: { data } };
}
