<template>
  <div>
    <Preview/>                                                                                                   
    <why-us/>
    <ourJobs/>
    <achievements/>
  </div>
</template>

<script>
import Preview from '@/components/Preview.vue'
import WhyUs from '@/components/whyUs.vue'
import ourJobs from '@/components/ourJobs.vue'
import achievements from '@/components/achievements.vue'

;

  export default {
  components: { Preview, WhyUs, ourJobs, achievements },
    
  };

</script>

<style lang="scss" scoped>

</style>