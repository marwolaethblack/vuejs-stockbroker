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
    ],
    
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

const addStockToPortfolio = (context, payload) => {

    if(state.portfolio.filter( (stock, index) => stock.name === payload.name).length > 0) {
        state.portfolio[index].count +- payload.count;
    } else {
        state.portfolio.push(payload);
    }

}

//Actions
const randomizePricesAction = (context) => {
    context.commit('randomizePrices');
}

const addStockToPortfolioAction = (context, payload) => {
    context.commit('addStockToPortfolio', payload);
}




const store = new Vuex.Store({
   state,
   getters: {
       money,
       stocks,
       portfolio
   },
   mutations: {
       randomizePrices,
       addStockToPortfolio
   },
   actions: {
       randomizePricesAction,
       addStockToPortfolioAction
   }
});

export default store;