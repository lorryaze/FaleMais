import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Origem</th>
        <th>Desino</th>
        <th>Valor por Min</th>
      </tr>
    </thead>
  );
};

const Table = (props) => {
  const rows = props.characterDataFixes.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.origem}</td>
        <td>{row.destino}</td>
        <td>{row.valor}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class TableTarifas extends Component {
  render(props) {
    const { characterDataFixes } = this.props;
    return (
      <table>
        <TableHeader />
        <Table characterDataFixes={characterDataFixes} />
      </table>
    );
  }
}

export default TableTarifas;
