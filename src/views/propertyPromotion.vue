<template>
    <div>
      <div id="PropertyPromotion">
        <immoListing/>     
      <immoItem/>   
      </div>
                                                                                                 
    </div>
  </template>
  
  <script>
  import immoListing from '@/components/immoListing.vue' ;
  import immoItem from '@/components/immoItem.vue';
  
    export default {
    components: { immoListing, immoItem},
      
    };
  
  </script>
  
  <style lang="scss" scoped>
  #PropertyPromotion{
    background-color: rgb(245 245 245 );
    
  }
  </style>