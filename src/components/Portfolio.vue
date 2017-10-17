<template>
    <ul>
        <li v-for="stock in portfolio">
            <h3>{{ stock.name }}</h3>
                <p>{{ stock.count + " owned"}}</p>
                <input @input="handleChange" :value="count[stock.name]" type="number" placeholder="Enter amount" :name="stock.name" />
                <button @click="sellStocks"  :id="stock.name">Sell</button>
                <span>{{ errors[stock.name] }}</span>
        </li>
    </ul>
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
                'portfolio'
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

                let stockName = e.target.id;
                this.sellStocksAction({
                    name: stockName,
                    count: parseInt(this.count[stockName])
                })
            }
        }
    }
</script>

<style>

</style>