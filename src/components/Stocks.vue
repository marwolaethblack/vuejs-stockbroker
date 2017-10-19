<template>
    <div>
        <p>Stocks</p>
        <article v-for="(stock, stockName) in stocks">
            <p>{{ stockName }}</p>
            <p>{{ stock.price }}</p>
            <input class="input is-primary" @input="handleChange" :value="count[stockName]" type="number" placeholder="Enter amount" :name="stockName" />
            <button class="button is-primary" @click="buyStocks"  :id="stockName" >Buy</button>
        </article>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                count: {}
            }
        },
        computed: {
            ...mapGetters([
                'stocks',
                'money'
            ])
        },
        methods: {
            ...mapActions([
                'addStockToPortfolioAction'
            ]),
            handleChange(e) {
                const element = e.target;
                this.count[element.name] = e.target.value;
            },
            buyStocks(e) {
                const stockName = e.target.id;
                const price = this.stocks[stockName].price;
                const stocksToBuy = this.count[stockName]

                if(stocksToBuy * price > this.money) {
                    alert("You do not have enough money to buy that many stocks");
                }else if(stocksToBuy <= 0 || isNaN(stocksToBuy)) {
                    alert('Invalid input');
                } else {
                    this.addStockToPortfolioAction({
                        name: stockName,
                        count: parseInt(stocksToBuy)
                    })
                }


            }
        }
    }
</script>

<style>

</style>