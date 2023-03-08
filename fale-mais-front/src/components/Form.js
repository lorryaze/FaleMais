import React, { Component } from "react";

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

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { origem, destino, tempo, plano } = this.state;

    return (
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
    );
  }
}

export default Form;
