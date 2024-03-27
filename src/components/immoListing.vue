<template>
    <section id="immo-listing">
        <div class="immoListing container">
            <div class="search-filter">
                <div class="filter-items-container">
                    <div class="filter-item">

                        <filterItem filter="Tout" />

                    </div>

                    <div class="filter-item">

                        <filterItem filter="Haut-Standing" />

                    </div>

                    <div class="filter-item">

                        <filterItem filter="Logements sociaux" />

                    </div>

                    <div class="filter-item">

                        <filterItem filter="Centre commercial" />

                    </div>

                    <div class="filter-item">

                        <filterItem filter="Terrains viabilisés" />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import filterItem from "@/components/filterItem.vue"

export default {
    components: { filterItem }

}
</script>

<style lang="scss" scoped>
#immo-listing {
    .search-filter {
        display: flex;


        .filter-items-container {
            display: flex;
            align-items: center;
            gap: 1rem;

            .filter-item {
                
                padding: 2.5rem 1.5rem;

                button {
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    font-size: 14px;
                    --tw-text-opacity: 1;
                    color: rgb(0 72 154 / var(--tw-text-opacity));
                    --tw-bg-opacity: 1;
                    background-color: rgb(0 72 154 / var(--tw-bg-opacity));

                    h3 {
                        color: red;
                    }
                }



            }

        }
    }
}
</style>