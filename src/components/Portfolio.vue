<template>
    <ul v-if="Object.keys(portfolio).length > 0">
        <li v-for="(stock, stockName) in portfolio">
            <h3>{{ stockName }}</h3>
                <p>{{ stock.count + " owned"}}</p>
                <input @input="handleChange" :value="count[stockName]" type="number" placeholder="Enter amount" :name="stockName" />
                <button @click="sellStocks"  :id="stockName">Sell</button>
                <span>{{ errors[stockName] }}</span>
        </li>
    </ul>
    <p v-else>Your portfolio is empty</p>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return{
                count: {},
                errors: {}
            }
        },
        computed: {
            ...mapGetters([
                'portfolio',
                'stocks',
                'money'
            ])
        },
        methods: {
            ...mapActions([
                'sellStocksAction'
            ]),
            handleChange(e) {
                let element = e.target;
                this.count[element.name] = e.target.value;
            },
            sellStocks(e) {
                const stockName = e.target.id;
                const stocksToSell = this.count[stockName];
                const ownedStocks = this.portfolio[stockName].count;

                if(stocksToSell > ownedStocks) {
                    alert("You are trying to sell more stocks than you own")
                } else {
                    this.sellStocksAction({
                        name: stockName,
                        count: parseInt(this.count[stockName])
                    })
                }


            }
        }
    }
</script>

<style>

</style>