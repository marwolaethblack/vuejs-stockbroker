import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    money: 10000,
    portfolio: {},
    stocks: {
        Apple: {
            price: 500
        },
        Tesla: {
           price: 330
        },
        BMW: {
            price: 250
        },

    },

}

//Getter
const money = state => state.money;
const stocks = state => state.stocks;
const portfolio = state => state.portfolio;

//Mutations
const randomizePrices = () => {
    const { stocks } = state;

    Object.keys(stocks).forEach( stock => {
        stocks[stock].price = Math.floor(Math.random() * 300 + 50);
    })

}

const addStockToPortfolio = (context, payload) => {;
    const { portfolio } = state;
    const { name } = payload;
    if(portfolio[name]) {
        state.portfolio[name].count += payload.count;
    } else {
        state.portfolio[name] = { count: payload.count };
        console.log(state.portfolio[name]);
    }


    state.money -= state.stocks[name].price * payload.count;

}


const sellStocks = (context, payload) =>  {
    const { portfolio } = state;
    const { name } = payload;
    const newCount = state.portfolio[name].count - payload.count;
    console.log(newCount);

    if(newCount === 0) {
        delete state.portfolio[name]
        state.portfolio = { ...state.portfolio };
    } else{
        state.portfolio = {...state.portfolio,[name]: { count: newCount } };
    }

    state.money += state.stocks[name].price * payload.count;
}

//Actions
const randomizePricesAction = ({ commit }) => {
    commit('randomizePrices');
}

const addStockToPortfolioAction = ({ commit }, payload) => {
    commit('addStockToPortfolio', payload);
}

const sellStocksAction = ({ commit }, payload) => {
    commit('sellStocks', payload);
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