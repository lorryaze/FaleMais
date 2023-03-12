import React, { Component } from "react";
import Price from "../components/Price";

let comFaleMais;
let semFaleMais;
let resultado;

const styleTB = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderSpacing: "30px",
  borderCollapse: "separate",
};

const styleInput = {
  borderTop: "3px",
  padding: "5px",
  background: "#E6E6E6",
  borderRadius: "5px",
  border: "none",
};

const styleButton = {
  marginTop: "20px",
  fontWeigth: "700",
  background: "#E6E6E6",
  borderRadius: "5px",
  margin: "12px",
};

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
          <table style={styleTB}>
            <td>
              <input
                style={styleInput}
                placeholder="Origem"
                type="text"
                name="origem"
                id="origem"
                value={origem}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                style={styleInput}
                placeholder="Destino"
                type="text"
                name="destino"
                id="destino"
                value={destino}
                onChange={this.handleChange}
              />
            </td>
          </table>
          <table style={styleTB}>
            <td>
              <input
                style={styleInput}
                placeholder="Tempo"
                type="text"
                name="tempo"
                id="tempo"
                value={tempo}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                style={styleInput}
                placeholder="Plano"
                type="text"
                name="plano"
                id="plano"
                value={plano}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                style={styleButton}
                type="button"
                value="Submit"
                onClick={this.submitForm}
              />
            </td>
          </table>
        </form>
        <Price semFaleMais={semFaleMais} comFaleMais={comFaleMais} />
      </div>
    );
  }
}

export default Form;
