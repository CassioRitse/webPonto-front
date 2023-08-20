import FormHorario from "@/Components/FormHorario";
import Navbar from "@/Components/Navbar";
import Tabela from "@/Components/Tabela";
import { api } from "@/service/api";

interface dataHorarios {
  data: Array<Horario>;
}

interface Horario {
  idhorario: string;
  entrada: string;
  saida: string;
}

export default function MeusHoraios(props: dataHorarios) {
  async function handleLimparHorarios() {
    try {
      await api.put("marcarHorarios");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className={"flex min-h-screen flex-col justify-between"}>
      <div className="mb-4">
        <h1 className="text-2xl text-center pt-8">Meus Horários</h1>
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="mt-4">
            <FormHorario acao="marcarHorarios" title="Novo Horário" />
          </div>
        </div>
        {props.data.length == 0 ? (
          <span>Cadatre seu primeiro Horário</span>
        ) : (
          <div className="flex flex-col items-center">
            <div>
              <Tabela {...props}></Tabela>
            </div>
            <button
              onClick={() => handleLimparHorarios()}
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:red-blue-500 rounded"
            >
              Limpar Horários
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const data = (await api.get("http://localhost:8080/apiPonto/marcarHorarios"))
    .data;
  return { props: { data } };
}
