<template>
    <div>
        <h3> {{ filter }}</h3>
    </div>
</template>

<script>
   export default {
    props: {
        filter: {
            type: String,
            default: "Place your text here"
        },

    }
}
</script>

<style lang="scss" scoped>

</style>