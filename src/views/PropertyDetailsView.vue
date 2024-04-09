<template>
    <div>
        <propertyDetails />
        {{ $route.params.slug }}

    </div>
</template>

<script>
import propertyDetails from '@/components/propertyDetails.vue';

export default {
    components: { propertyDetails },
    data() {
    return {
     singleProperty:{}
    }
  },
    mounted() {
       console.log(this.$route.params.slug );

    //    'https://www.apisocabeg.intech.sn/api/v1/proprietes-immo/' + this.$route.params.slug
    
       `https://www.apisocabeg.intech.sn/api/v1/proprietes-immo/${this.$route.params.slug}`
    },
}
</script>

<style lang="scss" scoped></style>