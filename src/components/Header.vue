<template>
    <header class="main-header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="tabs is-large">
                    <ul>
                        <router-link active-class="is-active" tag="li" to="/" exact><a>VueStockBroker</a></router-link>
                        <router-link active-class="is-active" tag="li" to="/stocks"><a>Stocks</a></router-link>
                        <router-link active-class="is-active" tag="li" to="/portfolio"><a>Portfolio</a></router-link>
                        <span class="navbar-item">{{ funds }}</span>
                        <button class="navbar-item button is-primary" @click="randomizePricesAction">End day</button>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
    <!--<header class="main-header">-->


    <!--</header>-->
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'money'
            ]),
            funds(){
                return this.money.toLocaleString() + "$";
            }
        },
        methods: {
            ...mapActions([
                'randomizePricesAction'
            ])
        }
    }
</script>

<style scoped>
    .main-header{
        margin-bottom: 50px;
    }

</style>