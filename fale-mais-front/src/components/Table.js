import React, { Component } from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>Tempo</th>
        <th>Plano</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.origem}</td>
        <td>{row.destino}</td>
        <td>{row.tempo}</td>
        <td>{row.plano}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render(props) {
    const { characterData, removeCharacter } = this.props;

    return (
      (<h2>Tabela de preços calculados</h2>),
      (
        <table>
          <TableHeader />,
          <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
          />
        </table>
      )
    );
  }
}

export default Table;
