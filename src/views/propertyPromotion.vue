<template>
  <div>
    <div id="PropertyPromotion">
      <immoListing :category="allCategories" />

      <div id="immo-items-container">
        <div class="container">
          <div class="immo-items-container">

            <!-- <realisationCard v-for="i in 4" :key="i" title="Les maisons du Lac" :bedValue="2" :parkingValue="2"
              :poolValue="2" :gymValue="2" /> -->
            <realisationCard v-for="realisation in allProperties" :key="realisation.id" :property="realisation" />
          </div>
        </div>
      </div>
    </div>
    <!-- {{ allProperties }} -->
  </div>
</template>

<script>
import axios from 'axios'
import realisationCard from '../components/realisationCard.vue';
import immoListing from '@/components/immoListing.vue';

export default {
  components: { immoListing, realisationCard },
  data() {
    return {
      // title: 'Sooooo',
      allProperties: [],
      allCategories: []
    }
  },
  mounted() {
    this.getAllproperties(),
      this.getAllCategories()
  },
  methods: {
    async getAllproperties() {

      try {
        
        const response = await axios
          .get('https://www.apisocabeg.intech.sn/api/v1/proprietes-immo')
        this.allProperties = response.data.data
        console.log(this.allProperties);
      } catch (error) {
        console.log(error);

      }
    },
    async getAllCategories() {

      try {
        const response = await axios
          .get('https://www.apisocabeg.intech.sn/api/v1/categories-immo')
        this.allCategories = response.data.data
        console.log(this.allCategories);
      } catch (error) {
        console.log(error);
      }
    }
  }
};



</script>

<style lang="scss" scoped>
#PropertyPromotion {
  background-color: rgb(245 245 245);

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

          .card {
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

}
</style>