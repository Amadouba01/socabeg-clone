<template>
    <div>
        <button> <h3> {{ filter }} </h3> </button>
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