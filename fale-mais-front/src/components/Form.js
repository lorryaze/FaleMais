import React, { Component } from "react";
import Price from "../components/Price";

let comFaleMais;
let semFaleMais;
let resultado;

class Form extends Component {
  //seting inital state of my form camps
  initialState = {
    origem: "",
    destino: "",
    tempo: "",
    plano: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = async () => {
    this.props.handleSubmit(this.state);
    try {
      resultado = await fetch(
        "http://localhost:3001/chamada?" +
          new URLSearchParams({
            origem: this.state.origem,
            destino: this.state.destino,
            tempo: this.state.tempo,
            plano: this.state.plano,
          })
      );

      resultado = await resultado.json();
      semFaleMais = resultado.resultado[0];
      comFaleMais = resultado.resultado[1];
    } catch (e) {
      console.log(e);
    }
    this.setState(this.initialState);
  };
  render() {
    const { origem, destino, tempo, plano } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="origem">Origem</label>
          <input
            type="text"
            name="origem"
            id="origem"
            value={origem}
            onChange={this.handleChange}
          />
          <label htmlFor="destino">Destino</label>
          <input
            type="text"
            name="destino"
            id="destino"
            value={destino}
            onChange={this.handleChange}
          />
          <label htmlFor="tempo">Tempo</label>
          <input
            type="text"
            name="tempo"
            id="tempo"
            value={tempo}
            onChange={this.handleChange}
          />
          <label htmlFor="plano">Plano</label>
          <input
            type="text"
            name="plano"
            id="plano"
            value={plano}
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
        <Price semFaleMais={semFaleMais} comFaleMais={comFaleMais} />
      </div>
    );
  }
}

export default Form;
