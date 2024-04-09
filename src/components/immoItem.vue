<template>
    <div>
        <section id="immo-items-container">
            <div class="container">
                <div class="immo-items-container">
                   
                    <realisationCard v-for="i in 4" :key="i" title="Les maisons du Lac" bedValue="2" parkingValue="2" poolValue="2" gymValue="2"/>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import viewdetails from "@/components/viewdetails.vue"
import realisationCard from "@/components/realisationCard.vue"
export default {
    components: {
        viewdetails,
        realisationCard
    }

}


</script>

<style lang="scss" scoped>
#immo-items-container {
    .container {
        .immo-items-container {
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(12, 1fr);

            .realisation-container {
                grid-column-end: span 6;
                display: flex;
                gap: 10px;
                flex-direction: column;
                --tw-bg-opacity: 1;
                background-color: rgb(255 255 255 / var(--tw-bg-opacity));

                .card{
                    align-items: center;
                }
                .text {
                    a {
                        color: #0c4e91;
                        cursor: pointer;
                        text-decoration: none;
                    }
                }

                .option {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    .details {
                        font-size: 12px;
                        text-align: right;
                        color: red;
                    }
                }
            }
        }
    }
}

img {
    max-width: 100%;
    height: auto;
    height: 300px;
    display: block;
    width: 100%;
}
</style>