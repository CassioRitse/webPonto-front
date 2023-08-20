import { useForm } from "react-hook-form";
import axios from "axios";
import { api } from "@/service/api";

interface data {
  acao: string;
  title: string;
}

export default function FormHorario(dataForm: data) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleMarcarHorario(data: any) {
    try {
      await api.post(`${dataForm.acao}`, data);
      alert("Cadastro realizado com Sucesso");
      location.href = "/meusHorarios";
    } catch (error) {
      console.log(error);
      alert(error.body);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleMarcarHorario)}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              htmlFor="entradaHoraio"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Horários Entrada
            </label>
            <input
              id="entradaHoraio"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="06:00"
              required
              {...register("entrada", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^(?:[01]\d|2[0-3]):[0-5]\d$/,
                  message: "Formato inválido (hh:mm)",
                },
              })}
            ></input>
            {errors.entrada && (
              <p className="text-red-500">{errors.entrada?.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="saidaHorario"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Horários Saída
            </label>
            <input
              id="saidaHorario"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="12:00"
              required
              {...register("saida", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^(?:[01]\d|2[0-3]):[0-5]\d$/,
                  message: "Formato inválido (hh:mm)",
                },
              })}
            ></input>
            {errors.saida && (
              <p className="text-red-500">{errors.saida?.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          {dataForm.title}
        </button>
      </form>
    </div>
  );
}
