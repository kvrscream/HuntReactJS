import React, { Component } from 'react';
import api from '../../Services/api';
import {Link} from 'react-router-dom';
import './styles.css';

export default class Edit extends Component {


  state = {
    product: [],
  }

  componentDidMount(){
    this.loadProduct();
  }

  loadProduct = async () => {
    const id = this.props.match.params.id;
    const response = await api.get(`/products/detail/${id}`);

    this.setState({product: response.data});
  }

  //Sem a handleChange não conseguiria atualizar o state dos inputs
  handleChangeTitle = (e) => {
    //Copia todo o state a variável state
    const state = this.state;
    state.title = e.target.value;
    this.setState({product:state});
  }

  handleChangeDesc = (e) => {
    //Copia todo o state a variável state
    const state = this.state;
    state.description = e.target.value;
    this.setState({product:state});
  }

  handleChangeUrl = (e) => {
    //Copia todo o state a variável state
    const state = this.state;
    state.url = e.target.value;
    this.setState({product:state});
  }

  handleSubmit = async (e) =>{
    e.preventDefault(); 
    const data = this.state.product.product;
    console.log(data);
    const response = await api.put(`/products/update/${this.props.match.params.id}`, data);
    console.log(response.data);
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input 
            name="title"
            value={this.state.product.title}
            onChange={this.handleChangeTitle.bind(this)}
          />

          <input 
            name="description"
            value={this.state.product.description}
            onChange={this.handleChangeDesc.bind(this)}
          />

          <input 
            name="url"
            value={this.state.product.url}
            onChange={this.handleChangeUrl.bind(this)}
          />
          <div className="actions">
            <button type="submit"> Salvar </button>

          </div>
        </form>
      </div>
    )
  }

}