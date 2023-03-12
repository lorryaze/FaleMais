import React, { Component } from "react";

const style = {
  display: "flex",
  flexDirection: "column",
  borderSpacing: "5px",
  alignItems: "center",
  borderCollapse: "separate",
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>Valor por Min</th>
      </tr>
    </thead>
  );
};

const Table = (props) => {
  const rows = props.characterDataFixes.map((row, index) => {
    return (
      <tr key={index}>
        <td style={{ padding: "10px" }}>{row.origem}</td>
        <td style={{ padding: "10px" }}>{row.destino}</td>
        <td style={{ padding: "10px" }}>{row.valor}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class TableTarifas extends Component {
  render(props) {
    const { characterDataFixes } = this.props;
    return (
      <table style={style}>
        <TableHeader />
        <Table characterDataFixes={characterDataFixes} />
      </table>
    );
  }
}

export default TableTarifas;
