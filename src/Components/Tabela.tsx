import { UUID } from "crypto";

interface dataTable {
  data: Array<Horario>;
  coluna1?: string;
  coluna2?: string;
}

interface Horario {
  idhorario: string;
  entrada: string;
  saida: string;
}

export default function Tabela(props: dataTable) {
  return (
    <div className="md:px-32 py-8 w-full">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                ID
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                {props.coluna1 ? props.coluna1 : "Entrada"}
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                {props.coluna2 ? props.coluna2 : "Saída"}
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {props.data.map((e) => (
              <tr key={e.idhorario}>
                <td>{e.idhorario}</td>
                <td>{e.entrada}</td>
                <td>{e.saida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
