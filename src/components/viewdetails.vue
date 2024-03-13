<template>
    <div class="viewdetails">

        <p> {{ details }}</p>
        <span>
            <svg data-v-834497b4="" width="6" height="10" viewBox="0 0 6 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path data-v-834497b4="" d="M1 8.52997L4.52 4.99997L1 1.46997" stroke="#3B474F" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: String,
            default: "Voir les détails"
        },

    }
}
</script>

<style lang="scss" scoped>
.viewdetails {
    display: flex;
    align-items: center;
    gap: 10px;
    a { 
        text-decoration: none;
    }
}
</style>