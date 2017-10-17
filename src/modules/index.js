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
    //variable for storing indices
    let i = state.portfolio.findIndex( (stock) => stock.name === payload.name);
    //variable assignment in if intended
    if(i != -1) {
        console.log(state.portfolio[i]);
        state.portfolio[i].count += payload.count;
    } else {
        state.portfolio.push(payload);
    }

    i = state.stocks.findIndex( stock => stock.name === payload.name);

    state.money -= state.stocks[i].price * payload.count;

}


const sellStocks = (context, payload) =>  {
    let i = state.portfolio.findIndex( stock => stock.name === payload.name);
    state.portfolio[i].count -= payload.count;

    i = state.stocks.findIndex( stock => stock.name === payload.name);
    state.money += state.stocks[i].price * payload.count;
}

//Actions
const randomizePricesAction = (context) => {
    context.commit('randomizePrices');
}

const addStockToPortfolioAction = (context, payload) => {
    context.commit('addStockToPortfolio', payload);
}

const sellStocksAction = (context, payload) => {
    context.commit('sellStocks', payload);
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
       addStockToPortfolio,
       sellStocks
   },
   actions: {
       randomizePricesAction,
       addStockToPortfolioAction,
       sellStocksAction
   }
});

export default store;