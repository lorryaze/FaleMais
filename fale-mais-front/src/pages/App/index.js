import React, { Component } from "react";
import Form from "../../components/Form";
import TableTarifas from "../../components/TableTarifas";
import tarifas from "../tabelaPreco";
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
    return (
      <div className="container">
        <h1>Fale Mais</h1>
        <h3>Insira os dados da chamada que deseja calcular.</h3>
        <Form handleSubmit={this.handleSubmit} />
        <h2>Tabela de preços por minuto</h2>
        <TableTarifas characterDataFixes={tarifas} />
      </div>
    );
  }
}

export default App;
