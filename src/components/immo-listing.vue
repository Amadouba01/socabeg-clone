<template>
    <div>
<section id="immo-listing">
    <div class="search-filter">
        <div class="filter-items-container">
            <div class="filter-item">
                <filterItem filter="Tout"/>
            </div>

            <div class="filter-item">
                <filterItem filter="Haut-Standing"/>
            </div>

            <div class="filter-item">
                <filterItem filter="Logements sociaux"/>
            </div>

            <div class="filter-item">
                <filterItem filter="Centre commercial"/>
            </div>

            <div class="filter-item">
                <filterItem filter="Terrains viabilisés"/>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

#immo-listing{
    .search-filter{
        .filter-items-container{
            display: flex;
            .filter-item{

            }
        }

    }
}
</style>