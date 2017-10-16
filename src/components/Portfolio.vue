<template>
    <ul>
        <li v-for="stock in portfolio">{{ stock.name }}</li>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'portfolio'
            ])
        }
    }
</script>

<style>

</style>