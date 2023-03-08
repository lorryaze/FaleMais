import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import TableTarifas from "./components/TableTarifas";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { characters } = this.state;
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
        <h2>Tabela de preços calculados</h2>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Insira os dados da chamada que deseja calcular.</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
