import React, { Component } from "react";
import Form from "../../components/Form";
import TableTarifas from "../../components/TableTarifas";
import "./styles.css";

class App extends Component {
  state = {
    tarifasCalculadas: [],
  };

  handleSubmit = (tarifa) => {
    this.setState({
      tarifasCalculadas: [...this.state.tarifasCalculadas, tarifa],
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { tarifasCalculadas } = this.state;

    const tarifas = [
      {
        origem: "011",
        destino: "016",
        valor: "1.90",
      },
    ];

    return (
      <div className="container">
        <h1>Fale Mais</h1>
        <h2>Tabela de preços por minuto</h2>
        <TableTarifas characterDataFixes={tarifas} />
        <h3>Insira os dados da chamada que deseja calcular.</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
