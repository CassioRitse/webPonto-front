import Image from "next/image";
import icon from "../../public/iconFuncpng.png";
import FormHorario from "./FormHorario";

export default function CardFuncionario() {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-l border-gray-400 p-4">
      <div className="h-40 w-36 lg:h-auto lg:w-40 flex items-center text-center overflow-hidden">
        <Image alt="Imagem do Funcionario" src={icon}></Image>
      </div>
      <div className=" bg-white rounded-b flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center"></p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Juliano Araujo
          </div>
          <p className="text-gray-700 text-base">Vendas</p>
        </div>
      </div>
    </div>
  );
}
