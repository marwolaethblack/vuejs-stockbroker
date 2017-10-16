<template>
    <header>
        <p>{{ money + "$" }}</p>
        <router-link to="/stocks">Stocks</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <button @click="randomizePricesAction">End day</button>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'money'
            ])
        },
        methods: {
            ...mapActions([
                'randomizePricesAction'
            ])
        }
    }
</script>

<style>

</style>