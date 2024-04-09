<template>
    <section id="immo-listing">
        <div class="immoListing container">
            <div class="search-filter">
                <div class="filter-items-container">
                    <div class="filter-item">
                        <a href="#"><button>Tout</button></a>
                        

                    
                        
                    </div>
                    <div class="filter-item" v-for="(category,index) in category" :key="index">
                        <a href="#"><button>{{ category.text_fr }}</button></a>
                        
                        

                    </div>
                    <!-- <div class="filter-item">
                        <a href="#"><button><p>Haut-Standing</p></button></a>
                        
                        
                    </div>
                    
                    
                    
                    <div class="filter-item">
                        <a href="#"><button><p>Centre commercial</p></button></a>
                        

                    </div>

                    <div class="filter-item">
                        <a href="#"><button><p>Terrains viabilisés</p></button></a>
                        

                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import filterItem from "@/components/filterItem.vue"

export default {
    components: { filterItem },
    props: {
        category:{
            type: Array,
            required:true
        }
}
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
                    margin: 0;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    font-size: 14px;
                    border: 0px;
                    --tw-text-opacity: 1;
                    color: rgb(0 72 154 / var(--tw-text-opacity));
                    --tw-bg-opacity: 1;
                    background-color: rgb(255 255 255 / var(--tw-bg-opacity));

                    p {
                        color: white;
                        font-size: 14px;

                    }
                }



            }

        }
    }
}
</style>