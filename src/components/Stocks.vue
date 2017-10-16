<template>
    <div>
        <p>Stocks</p>
        <article v-for="stock in stocks">
            <p>{{ stock.name }}</p>
            <p>{{ stock.price }}</p>
        </article>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'stocks'
            ])
        }
    }
</script>

<style>

</style>