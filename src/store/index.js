import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    produtos:[]
  },
  mutations: {
    carregarProdutos(state,produtos){
      state.produtos = produtos;
    }
  },
  actions: {
    carregarProdutos({commit}){
      axios
      .get('https://fakestoreapi.com/products?limit=5')
      .then(response=>{
        commit('carregarProdutos', response.data);
      })
    }
  },
  modules: {
  }
})
