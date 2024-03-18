<template>
    <div class="appTitle">
        
        <h2> {{ title }}</h2>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Place your text here"
        },

    }
}
</script>

<style lang="scss" scoped>
.appTitle {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
        font-size: 1.953rem;
        font-weight: 800;
    }
}
</style>