<template>
    <div class="appTitle">
        <div class="minilogo">
            <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.468 0.936157L34.785 25.734H6.15089L20.468 0.936157Z" fill="#01418A"></path>
                <path d="M13.7766 0.936157L25.7075 21.6011H1.84571L13.7766 0.936157Z" fill="#CD0B11">
                </path>
            </svg>
        </div>
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