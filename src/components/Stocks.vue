<template>
    <div>
        <p>Stocks</p>
        <article v-for="stock in stocks">
            <p>{{ stock.name }}</p>
            <p>{{ stock.price }}</p>
            <input @input="handleChange" :value="count[stock.name]" type="number" placeholder="Enter amount" :name="stock.name" />
            <button @click="buyStocks"  :id="stock.name">Buy</button>
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
                'stocks'
            ])
        },
        methods: {
            ...mapActions([
                'addStockToPortfolioAction'
            ]),
            handleChange(e) {
                let element = e.target;
                this.count[element.name] = e.target.value;
            },
            buyStocks(e) {
                let stockName = e.target.id;
                this.addStockToPortfolioAction({
                    name: stockName,
                    count: parseInt(this.count[stockName])
                })
            }
        }
    }
</script>

<style>

</style>