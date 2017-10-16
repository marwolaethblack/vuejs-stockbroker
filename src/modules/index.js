import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    money: 10000,
    portfolio: [],
    stocks: [
        {
            name: 'Apple',
            price: 500
        },
        {
            name: 'Tesla',
            price: 400
        },
        {
            name: 'BMW',
            price: 350
        }
    ]
}

//Getter
const money = state => state.money;
const stocks = state => state.stocks;
const portfolio = state => state.portfolio;

//Mutations
const randomizePrices = () => {
   return state.stocks.forEach( stock => {
       return stock.price = Math.floor(Math.random() * 300 + 50);
    } )
}



//Actions
const randomizePricesAction = (context) => {
    context.commit('randomizePrices');
}

const store = new Vuex.Store({
   state,
   getters: {
       money,
       stocks,
       portfolio
   },
   mutations: {
       randomizePrices
   },
   actions: {
       randomizePricesAction
   }
});

export default store;