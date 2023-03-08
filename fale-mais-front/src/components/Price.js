import React, { Component } from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Sem fale mais</th>
        <th>ComFaleMais</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.semFaleMais}</td>
        <td>{props.comFaleMais}</td>
      </tr>
    </tbody>
  );
};

class Price extends Component {
  render(props) {
    const { semFaleMais, comFaleMais } = this.props;

    return (
      (<h2>Tabela de preços calculados</h2>),
      (
        <table>
          <TableHeader />,
          <TableBody semFaleMais={semFaleMais} comFaleMais={comFaleMais} />
        </table>
      )
    );
  }
}

export default Price;
