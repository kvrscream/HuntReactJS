import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import api from '../../Services/api';
import './styles.css';

export default class Main extends Component {

  state = {
    products: [],
    productInfo: {},
    page: 1,
  };

  componentDidMount(){
    this.loadProducts();
  };

   loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const {docs, ...productInfo} = response.data;

    this.setState({products: docs, produtInfo: productInfo ,page: page});
  };

  prevPage = () => {
    const {page, productInfo} = this.state;

    if(page === 1) return;

    const pageNumber = page-1;
    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const {page, productInfo} = this.state;

    if (page === productInfo.pages)  return;


    const pageNumber = page +1;

    this.loadProducts(pageNumber);
  }

  render(){
    return(    
      <div className="product-list">
        {this.state.products.map((product) => 
          <article key={product._id} >
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar detalhes</Link>
          </article>
        )}
        <div className="actions">
          <button onClick={this.prevPage}> Anterior </button>
          <button onClick={this.nextPage}> Próximo </button>
        </div>
      </div>
    );
  }
}