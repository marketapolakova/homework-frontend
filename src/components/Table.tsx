import React from "react";
type TableData = {
  name: string;
  surname: string;
  bio: string;
  evaluated: number;
  unit: string;
};
type PropsType = {
  tableData: TableData[];
};

function Table({ tableData }: PropsType) {
  return (
    <table className="table table-bordered">
      <thead className="table-light">
        <tr>
          <th>Jméno</th>
          <th>Bio</th>
          <th>Průběžné hodnocení</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.name}>
            <td>
              {data.name} {data.surname}
            </td>
            <td>{data.bio}</td>
            <td>
              {data.evaluated}
              {data.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
