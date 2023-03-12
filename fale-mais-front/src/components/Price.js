import React, { Component } from "react";
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Preço Sem FaleMais</th>
        <th>Preço Com FaleMais</th>
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
      <table
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          borderSpacing: "30px",
          borderCollapse: "separate",
        }}
      >
        <TableHeader />
        <TableBody semFaleMais={semFaleMais} comFaleMais={comFaleMais} />
      </table>
    );
  }
}

export default Price;
