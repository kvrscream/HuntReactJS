import React, {Component} from 'react';
import api from '../../Services/api';
import {Link} from 'react-router-dom';

import './styles.css';

export default class Product extends Component {

  state = {
    product: [],
  }

  componentDidMount(){
    this.loadProduct();
  }

  loadProduct = async () => {
    const id = this.props.match.params.id;
    const response = await api.get(`/products/detail/${id}`);

    this.setState({product: response.data})
  };

  // deleteProduct = async () => {
  //   const response = await api.delete(`/products/destroy/${this.state.product._id}`);
  // };

  render(){
    return(
      <div className="container">
        <div className="card">
          <h1>{this.state.product.title}</h1>
          <p>{this.state.product.description}</p>
          <div className="actions">
            <Link to={`/edit/${this.state.product._id}`}>Editar</Link>
            <button>Excluir</button>
          </div>
        </div>
      </div>
    )
  }

}